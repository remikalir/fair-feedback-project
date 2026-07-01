// Single source of truth for the FAQ. Both the visible FAQ page (App.jsx's
// FAQPage) and the FAQPage JSON-LD emitted into the prerendered /faq HTML
// (via routes/faq.jsx meta()) derive from this array, so the two can never
// drift. Extracted verbatim from the original hand-written FAQPage.
//
// A paragraph is either a plain string, or an array of parts for the rare
// inline italics: a part is a string, or { i: "text" } for an <em> run.

export const FAQ_DATA = [
  {
    "id": "faq-about",
    "navLabel": "About the project",
    "heading": "About The Fair Feedback Project",
    "items": [
      {
        "q": "What is The Fair Feedback Project?",
        "a": [
          "The Fair Feedback Project is an openly accessible, research-based resource designed to help higher education instructors and institutions address documented bias in student evaluations of teaching (SETs). The project was created by Remi Kalir, PhD, as a practical resource that simultaneously demonstrates how generative AI (specifically Claude Code/Opus 4.6 & 4.8) may be responsibly used to advance pedagogical innovation.",
          "This project offers two tracks: an Instructor Track, which helps individual instructors generate evidence-based, course-specific mitigation strategies and materials for immediate use; and an Institutional Track, which provides resources and guidance for centers for teaching and learning, faculty leaders, and administrators working toward structural reform of how student feedback is collected, interpreted, and used in higher education. The project is designed to be useful across institutional types — research universities, liberal arts colleges, community colleges, and professional schools. All design decisions are grounded in peer-reviewed scholarship rather than any single institution's policies or practices."
        ]
      },
      {
        "q": "Is this project affiliated with a specific institution?",
        "a": [
          "No. The Fair Feedback Project, developed by Remi Kalir in collaboration with Claude, is neither affiliated with nor endorsed by any higher education institution (including Remi's employer, Duke University), or any evaluation software vendor, professional organization, or advocacy group."
        ]
      },
      {
        "q": "Who is this for?",
        "a": [
          "The Fair Feedback Project is designed for anyone involved in the teaching evaluation process in higher education. This includes individual instructors seeking practical strategies they can implement in their own courses this semester; educational developers and centers for teaching and learning looking for workshop materials, research summaries, and frameworks for campus conversations; department chairs responsible for interpreting evaluation data or supporting professional learning; as well as faculty and administrators involved in designing evaluation instruments, setting personnel policies, or making tenure and promotion decisions.",
          "We encourage all instructors to engage with The Fair Feedback Project, not only those who may be disadvantaged by current evaluation practices. Bias mitigation is most effective — and most equitable — when it is treated as a shared professional practice rather than an individual response to a personal problem."
        ]
      },
      {
        "q": "Does The Fair Feedback Project collect any data?",
        "a": [
          "No. The Fair Feedback Project does not collect, store, or transmit any user data. Any information you voluntarily provide while using the Instructor Track — such as your discipline, course level, or class size — is used solely to generate your materials in real time. Nothing is saved, logged, or accessible to anyone after your session. There are no individual accounts, no analytics tracking individual usage, and no way for us or anyone else to connect generated materials back to a specific person or course.",
          "We made this a foundational design choice because instructors — particularly those most affected by evaluation bias — should be able to explore these resources without concern that doing so will be visible to their institution, documented in any system, or used for any purpose beyond their own."
        ]
      }
    ]
  },
  {
    "id": "faq-design",
    "navLabel": "Design decisions",
    "heading": "Design decisions",
    "items": [
      {
        "q": "Why does the project use \"implicit bias\" framing rather than explicitly naming gender or racial bias?",
        "a": [
          "This is one of the most consequential design decisions in The Fair Feedback Project, and it is grounded directly in the intervention research. Three findings are particularly relevant.",
          "First, Boring and Philippe (2021) tested two different messages at a French university: one that shared research information about bias and one that normatively instructed students not to discriminate, especially on the basis of gender. The informational message was effective; the normative one was not.",
          "Second, Ayllón and Zamora (2025) tested two debiasing videos at the University of Girona. A video about implicit bias generally reduced the gender gap in evaluations. But a video that explicitly focused on gender bias — including the finding that male students are the primary source of the bias — triggered backlash: male students in that treatment group rated female instructors even lower than the control group.",
          "Third, Peterson et al. (2019) used language that referenced both race and gender bias but framed it within a broader discussion of unconscious and unintentional bias, the high stakes of evaluations, and a request to focus on course content. This framing was effective.",
          "The pattern is clear: informational, research-based messaging about implicit bias shows consistent positive effects, while normative or explicitly gendered messaging risks ineffectiveness or backlash. The Fair Feedback Project generates language consistent with the approaches that have demonstrated positive results, and it flags the risks associated with alternative framings so that instructors can make informed decisions for their own contexts."
        ]
      },
      {
        "q": "Why doesn't the project ask about my gender, race, or other identity characteristics?",
        "a": [
          "For two reasons. First, the evidence suggests that the most effective mitigation strategies — informational, implicit-bias framing with an emphasis on course content and the high stakes of evaluations — are beneficial regardless of the instructor's identity. Peterson et al. (2019) found that their intervention improved ratings for female instructors with no negative effect on male instructors. Genetin et al. (2022) found that their high-stakes treatment improved ratings for racial and ethnic minority instructors. These are strategies that help those most affected without requiring them to identify themselves.",
          "Second, asking instructors to disclose identity characteristics in order to receive appropriate recommendations would place the burden of the problem on those experiencing it, which conflicts with our Principle 3 commitment to designing The Fair Feedback Project as a professional best practice rather than an additional burden on marginalized faculty.",
          "The project does ask about course-level contextual factors — such as discipline, class size, course level, and modality — because the research shows these variables interact with bias in ways that affect which strategies are most appropriate and how language should be tailored."
        ]
      },
      {
        "q": "Why does the project include strategies beyond just the anti-bias statement?",
        "a": [
          "Because no single intervention is sufficient. The anti-bias evaluation preamble is the most well-studied strategy, but even the most optimistic findings (Peterson et al., 2019) show effects of approximately half a point on a five-point scale — meaningful but not transformative. Owen, De Bruin, and Wu (2025) found that similar messaging did not reduce gender disparities in qualitative comments. Heffernan (2023) documents the severity of abusive comments that no preamble is likely to prevent.",
          "A multi-strategy approach — combining evaluation preambles with structured in-class discussions, redesigned evaluation questions, self-affirmation prompts, and guidance on building teaching portfolios that contextualize evaluation data — offers more comprehensive coverage of the problem. It also gives instructors agency to select the strategies that are most appropriate for their course context and comfort level, rather than presenting a single intervention as a universal fix."
        ]
      },
      {
        "q": "How does the project account for differences across disciplines and institutional types?",
        "a": [
          "The Instructor Track asks about course-level contextual factors because the research identifies several variables that interact with evaluation bias. Evaluations in STEM fields tend to show different patterns than those in the humanities (Kreitzer & Sweet-Cushman, 2022). Large introductory courses present different challenges than small upper-level seminars. Required courses receive systematically different ratings than electives (Kogan, 2014). A department's gender composition shapes the role-congruity expectations that drive bias (Aragón, Pietri, & Powell, 2023).",
          "The project uses these inputs to tailor its recommendations — for example, adjusting the emphasis of generated language or flagging strategies that may be more or less effective in a given context. However, we are transparent that the intervention research has been conducted in a limited range of institutional and disciplinary settings. Most experimental studies have been conducted at large public universities in introductory-level courses. Generalization to other contexts — small colleges, graduate seminars, clinical settings, online programs — requires caution, and we note this wherever relevant."
        ]
      }
    ]
  },
  {
    "id": "faq-implementation",
    "navLabel": "Practical implementation",
    "heading": "Practical implementation",
    "items": [
      {
        "q": "When should I deploy an anti-bias statement?",
        "a": [
          "The research has tested anti-bias messaging in three deployment contexts: as a preamble to the evaluation instrument itself (included in the email or online survey before questions begin), as an in-class script delivered verbally by the instructor before evaluations, and as a pre-evaluation announcement posted to the course learning management system.",
          "The experimental studies most commonly used the evaluation preamble format (Peterson et al., 2019; Genetin et al., 2022; Boring & Philippe, 2021; Kim et al., 2024). This has the advantage of reaching every student who completes the evaluation, requiring no class time, and being easily standardized. However, at many institutions, individual instructors cannot modify the evaluation instrument — that is controlled at the department or institutional level. In those cases, an in-class script or LMS announcement may be the most practical option. The Fair Feedback Project generates materials for all three contexts.",
          "If you have the opportunity to choose, deploying the statement through the evaluation instrument itself most closely replicates the conditions under which the research has demonstrated positive effects. If your institution allows instructors to include custom introductory language in course evaluations, that is the strongest option."
        ]
      },
      {
        "q": "Will this look like I'm trying to manipulate my evaluations?",
        "a": [
          "This is a reasonable concern, and we take it seriously. A few points may be useful.",
          [
            "The strategies in The Fair Feedback Project are drawn from peer-reviewed, published research conducted at major universities with institutional review board approval. Peterson et al. (2019) published their intervention language, data, and analysis in ",
            {
              "i": "PLoS ONE"
            },
            ", an open-access journal. Genetin et al. (2022) pre-registered their study design. These are not informal workarounds — they are rigorously tested, transparent, evidence-based practices."
          ],
          "If you anticipate that colleagues or administrators might question your use of anti-bias language, The Fair Feedback Project can help you prepare. The project provides specific citations and summaries you can share with a department chair or tenure committee to contextualize the intervention as a response to well-documented measurement problems in student evaluations. Framing your use of these strategies as part of a professional commitment to fair evaluation — rather than an attempt to inflate your scores — is both accurate and consistent with how the researchers themselves describe the purpose of their interventions.",
          "You may also find it useful to advocate for your institution to adopt anti-bias language at the departmental or institutional level, so that it becomes standard practice rather than an individual choice. The Institutional Track of The Fair Feedback Project provides resources to support that conversation."
        ]
      },
      {
        "q": "Can I use the generated language exactly as written, or should I modify it?",
        "a": [
          "The language generated by The Fair Feedback Project is designed to be used as-is, but thoughtful adaptation for your specific context is also appropriate. The generated text is modeled on the messaging approaches that have demonstrated positive effects in the research. Significant departures from these approaches — particularly toward more normative or explicitly gendered framing — risk reducing effectiveness or triggering backlash, as discussed in our Principles.",
          "If you do adapt the language, we recommend preserving three core elements that are consistent across the effective interventions: an informational statement that evaluation bias is a documented phenomenon, an emphasis on the consequential nature of evaluations for instructors' careers, and a concrete redirection asking students to focus on course content and their learning experience rather than factors unrelated to instruction."
        ]
      },
      {
        "q": "How should I introduce this topic to my students?",
        "a": [
          "The research supports a range of approaches, from a brief written statement to a substantive classroom discussion. A written preamble — delivered through the evaluation instrument, an email, or an LMS announcement — requires the least class time and most closely replicates the experimental conditions in the literature.",
          "However, some instructors may wish to go further. A growing number of faculty are incorporating discussions of evaluation bias into their courses, treating it as a teaching moment about critical thinking, research methods, or equity — topics that are already part of many curricula. This approach is consistent with the broader pedagogical case for transparency in teaching, and some practitioners have argued that it can be more impactful than a standalone written statement precisely because it engages students in active reflection rather than passive reading.",
          "If you choose to hold a classroom discussion, we recommend framing it around the research evidence rather than your personal experience. Students are more receptive to information about documented patterns across institutions than to a conversation that may feel like a plea for better ratings. The Instructor Track can generate a discussion guide tailored to your course context."
        ]
      }
    ]
  },
  {
    "id": "faq-limitations",
    "navLabel": "Limitations",
    "heading": "Limitations and honest expectations",
    "items": [
      {
        "q": "Will this fix bias in my evaluations?",
        "a": [
          "Probably not entirely, and we think it's important to be straightforward about that. The positive studies show meaningful but modest effects — approximately half a point on a five-point scale for quantitative ratings of female instructors (Peterson et al., 2019), and higher scores for racial and ethnic minority instructors in the high-stakes treatment condition (Genetin et al., 2022). These effects are meaningful because they are comparable in magnitude to the bias itself. But they are not transformative, and they have not been demonstrated consistently across all contexts.",
          "There is less evidence that messaging interventions affect qualitative comments (Owen, De Bruin, & Wu, 2025), and no evidence that they prevent abusive comments (Heffernan, 2023). Effects may diminish over time if students become habituated to the language (Peterson et al., 2019). And no individual-level strategy can offset an institutional policy that treats raw evaluation scores as a primary measure of teaching quality.",
          "What we can say is this: the strategies in The Fair Feedback Project represent the best available evidence on what individual instructors can do to promote fairer evaluation of their teaching. Using them is substantially better than doing nothing. But they work best as part of a broader institutional commitment to evaluation reform, not as a substitute for one."
        ]
      },
      {
        "q": "Should my institution still be using student evaluations in tenure and promotion decisions?",
        "a": [
          "The American Sociological Association, joined by nearly two dozen scholarly organizations, recommends against using student evaluations as a primary or standalone metric in personnel decisions. This recommendation is grounded in evidence that SETs are weakly related to student learning (Boring, Ottoboni, & Stark, 2016; Uttl, White, & Gonzalez, 2017), systematically biased against marginalized faculty, and statistically misused (means of skewed distributions, small differences treated as meaningful, low response rates ignored).",
          "The Fair Feedback Project does not take a position on whether institutions should eliminate student evaluations entirely. Student feedback can provide valuable information about the learning experience when it is collected thoughtfully, interpreted with appropriate caution, and situated within a holistic assessment that includes peer observation, teaching portfolios, evidence of student learning, and reflective teaching statements. What the evidence does not support is the continued use of raw evaluation scores — particularly single-item global ratings — as the primary or sole basis for consequential employment decisions.",
          [
            "For institutions exploring alternatives, we recommend consulting the TEval framework, the DeLTA project, Michael McCreary's (2026) practical guide to modern teaching evaluation, and the 2025 publication ",
            {
              "i": "Transforming College Teaching Evaluation"
            },
            " (Austin et al.), all of which provide detailed models for holistic teaching assessment."
          ]
        ]
      },
      {
        "q": "What about the concern that raising awareness of bias could cause students to overcorrect?",
        "a": [
          "This is a legitimate methodological concern raised by Peterson et al. (2019) themselves: it is possible that students who are told about bias against female instructors may overcompensate by raising their ratings beyond what an unbiased assessment would produce. The researchers acknowledge that their data cannot definitively distinguish between bias reduction and overcorrection.",
          "However, several considerations are worth noting. The intervention showed no effect on ratings of male instructors, which would be unexpected if students were simply inflating all ratings in response to a social desirability cue. The magnitude of the positive effect on female instructors (approximately half a point) is comparable to the estimated magnitude of the gender bias itself, which is consistent with bias reduction rather than overcorrection. And the Kim et al. (2024) Australian study found that male and female students responded in opposite directions — male students raised ratings of disadvantaged instructors while female students lowered ratings of advantaged instructors — which suggests a more nuanced recalibration than simple inflation.",
          "We present this concern transparently because it is part of the scholarly conversation, and because instructors should understand that the evidence, while promising, is not without open questions."
        ]
      },
      {
        "q": "The research has mostly been conducted at large public universities. Is it relevant to my context?",
        "a": [
          "Most of the experimental intervention studies — Peterson et al. (2019) at Iowa State, Genetin et al. (2022) at Ohio State, Boring and Philippe (2021) at a French university — were conducted in large introductory courses at research-intensive institutions. The Owen, De Bruin, and Wu (2025) study at liberal arts colleges is a notable exception, though it found null results for its specific interventions. The Kim et al. (2024) study was conducted at an Australian university. Ayllón and Zamora (2025) worked at the University of Girona in Spain.",
          "The underlying evidence on bias itself is broader — documented across institutional types, national contexts, disciplines, and course modalities. The question is whether the specific mitigation strategies tested in one context transfer to others. We think it is reasonable to expect that the general principles — informational framing, emphasis on high stakes, redirection toward course content — will be useful across contexts, but we cannot guarantee that effect sizes will be comparable. We note these limitations wherever relevant and encourage instructors to think of the generated materials as an evidence-informed starting point for their own context, not a guaranteed intervention."
        ]
      }
    ]
  },
  {
    "id": "faq-institutional",
    "navLabel": "Institutional use",
    "heading": "Institutional use",
    "items": [
      {
        "q": "How can a center for teaching and learning use The Fair Feedback Project?",
        "a": [
          "The Institutional Track provides resources designed for faculty development contexts. Centers for teaching and learning and similar campus offices can use the research summaries and evidence briefs to anchor workshops on evaluation bias; use the generated anti-bias language as a starting point for developing institution-wide evaluation preambles; share the project with faculty as part of orientation programming or pre-evaluation-season communications; use the Principles and About sections as a framework for conversations about evaluation reform; and draw on the institutional case studies and reform models to build a case for policy change with administrators and faculty governance bodies.",
          "The project is designed to complement, not replace, broader institutional reform efforts. University centers, offices, departments, and other groups that are already engaged in teaching evaluation reform — through teaching quality frameworks, peer observation protocols, or holistic evaluation models — may find The Fair Feedback Project useful as one component of that larger work, particularly for addressing the specific problem of bias in the student feedback component of a multi-source evaluation system."
        ]
      },
      {
        "q": "Can we adopt anti-bias language at the departmental or institutional level rather than leaving it to individual instructors?",
        "a": [
          "Yes, and the research suggests this may be more effective and more equitable than individual adoption. When anti-bias language is standard — included in the evaluation instrument for all courses rather than added optionally by individual instructors — it avoids placing the burden of bias mitigation on those most affected by bias. It also avoids the concern that individual use might be perceived as an attempt to manipulate evaluations, since the language applies uniformly.",
          "However, institutional adoption also carries risks. Peterson et al. (2019) cautioned that if anti-bias language became universal, students might habituate to it and its effects could diminish. Ayllón and Zamora (2025) found that only about 13% of treated students actually watched a debiasing video when participation was voluntary, raising questions about compliance in institutional deployments. And any institutional language will need to be carefully framed — the evidence clearly favors informational over normative approaches, and institutions should resist the temptation to add language that sounds appropriately strong but that the research suggests is counterproductive.",
          "The Fair Feedback Project can generate language suitable for institutional adoption, and the Institutional Track provides guidance on how to implement it effectively."
        ]
      },
      {
        "q": "How should evaluation committees interpret SET data given what we know about bias?",
        "a": [
          "This is a question for institutions rather than individual instructors, but it is one of the most consequential applications of the research. Several evidence-based recommendations from the literature are worth highlighting.",
          "Look at distributions, not just means. Most faculty receive positively skewed evaluation scores, which means means are disproportionately influenced by negative outliers — a pattern that may itself be shaped by bias (Kreitzer & Sweet-Cushman, 2022). Medians and modal responses are more robust. Never treat small numerical differences as meaningful. Typical evaluation scores fall within a fraction of a point of one another. A difference between a 4.43 and a 4.60 on a five-point scale is not evidence of differential teaching quality — it is noise, and it may be bias-driven noise (Aragón, Pietri, & Powell, 2023). Consider contextual factors. Class size, course level, whether the course is required or elective, discipline, and time of day all influence evaluation scores independently of teaching quality (Kogan, 2014; Kreitzer & Sweet-Cushman, 2022). Committees should account for these factors rather than comparing raw scores across dissimilar courses. Corroborate with other evidence. Evaluation scores should be interpreted alongside peer observations, teaching portfolios, evidence of student learning, and the instructor's own reflective statement — not in isolation. Use student feedback formatively, not comparatively. Hamilton College's policy of prohibiting the use of student feedback to compare faculty to one another provides a useful model. Evaluation data can help an individual instructor understand and improve their practice without being weaponized as a ranking system."
        ]
      }
    ]
  }
];


// Flatten a paragraph (string | parts[]) to plain text for JSON-LD.
function paragraphText(p) {
  if (typeof p === "string") return p;
  return p.map((part) => (typeof part === "string" ? part : part.i)).join("");
}

// Derive the schema.org FAQPage object from FAQ_DATA. Answer text is the full
// answer, every paragraph joined — full verbatim is what makes drift impossible.
export function faqJsonLd() {
  const mainEntity = [];
  for (const section of FAQ_DATA) {
    for (const item of section.items) {
      mainEntity.push({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a.map(paragraphText).join("\n\n"),
        },
      });
    }
  }
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity };
}
