from PIL import Image, ImageDraw, ImageFont

S = 2
W, H = 1200*S, 630*S

# ---- exact brand tokens from App.jsx ----
BG        = "#faf9f7"   # bg
INK       = "#2d3436"   # slate900 (H1)
BODY      = "#636e72"   # slate600 (hero tagline)
URL_CLR   = "#69727f"   # slate500
PURPLE_TX = "#5b4a8a"   # accent
PURPLE_BG = "#eeebf5"   # accentLight
GREEN_TX  = "#2d6a4f"   # green
GREEN_BG  = "#e8f3ed"   # greenLight

def serif(size, wght=600, opsz=60):
    f = ImageFont.truetype("fonts/SourceSerif4.ttf", int(size*S)); f.set_variation_by_axes([wght, opsz]); return f
def sans(size, wght=400):
    f = ImageFont.truetype("fonts/SourceSans3.ttf", int(size*S)); f.set_variation_by_axes([wght]); return f

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)
CX = W/2

def text_w(font, s, tracking=0):
    w = d.textlength(s, font=font)
    if tracking: w += tracking*S*(len(s)-1)
    return w
def draw_tracked(s, font, fill, y, tracking=0, cx=CX, left=None):
    x = (left if left is not None else cx - text_w(font, s, tracking)/2)
    for ch in s:
        d.text((x, y), ch, font=font, fill=fill); x += d.textlength(ch, font=font) + tracking*S
def line_h(font, extra=0): a,dd = font.getmetrics(); return a+dd+extra*S

def wrap_balanced(text, font, max_w):
    def greedy(maxw):
        words, lines, cur = text.split(), [], ""
        for w in words:
            t=(cur+" "+w).strip()
            if text_w(font,t)<=maxw: cur=t
            else: lines.append(cur); cur=w
        if cur: lines.append(cur)
        return lines
    base=greedy(max_w); n=len(base)
    if n<=1: return base
    target=text_w(font,text)/n*1.03
    bal=greedy(min(max_w,target))
    return bal if len(bal)==n else base

# ----- PILLS (match on-site eyebrow: wght500, uppercase, 0.04em, radius~rect) -----
pill_font = sans(20,500); track=0.8; pad_x,pad_y = 16*S,7*S; gap=14*S; rad=7*S
def pill_dims(label):
    tw=text_w(pill_font,label,track); th=line_h(pill_font)
    return tw+2*pad_x, th+2*pad_y, tw, th
labels=[("FOR INSTRUCTORS",PURPLE_TX,PURPLE_BG),("FOR INSTITUTIONS",GREEN_TX,GREEN_BG)]
pdims=[pill_dims(l[0]) for l in labels]
pills_h=max(p[1] for p in pdims)

# ----- WORDMARK (Source Serif 4 SemiBold 600, -0.02em tracking) -----
title="The Fair Feedback Project"; tsize=92; wf=serif(tsize)
ttrack=-0.02*tsize
while text_w(wf,title,ttrack)>(1200-2*100)*S and tsize>40:
    tsize-=2; wf=serif(tsize); ttrack=-0.02*tsize
tbb=d.textbbox((0,0),title,font=wf,anchor="la"); title_h=tbb[3]-tbb[1]

# ----- DESCRIPTION (period added) -----
desc_txt=("Research-based, openly available tools to help instructors and institutions "
          "address documented bias in student evaluations of teaching.")
dmargin=108; dsize=33
while dsize>=27:
    df=sans(dsize,400); dlines=wrap_balanced(desc_txt,df,(1200-2*dmargin)*S)
    if len(dlines)<=2: break
    dsize-=1
dlh=line_h(df,9); desc_h=dlh*len(dlines)

# ----- URL pinned -----
uf=sans(27,600); url="fairfeedbackproject.org"; ulh=line_h(uf)
url_top=H-80*S-ulh

# ----- vertical centering of pills+wordmark+desc -----
g_pills_gap=46*S; g_title_gap=34*S
group_h=pills_h+g_pills_gap+title_h+g_title_gap+desc_h
band_top, band_bot = 80*S, url_top-44*S
y=band_top+(band_bot-band_top-group_h)/2

px=CX-(sum(p[0] for p in pdims)+gap)/2
for (label,tx,bg),(pw,ph,tw,th) in zip(labels,pdims):
    d.rounded_rectangle([px,y,px+pw,y+ph],radius=rad,fill=bg)
    draw_tracked(label,pill_font,tx,y+pad_y,tracking=track,left=px+pad_x)
    px+=pw+gap
y+=pills_h+g_pills_gap
draw_tracked(title,wf,INK,y-tbb[1],tracking=ttrack,cx=CX)
y+=title_h+g_title_gap
for ln in dlines:
    d.text((CX,y),ln,font=df,fill=BODY,anchor="ma"); y+=dlh
draw_tracked(url,uf,URL_CLR,url_top,tracking=0.5)

final=img.resize((1200,630),Image.LANCZOS)
final.save("og-image.png")
print("title",tsize,"wght600 | desc",dsize,"lines",len(dlines))
