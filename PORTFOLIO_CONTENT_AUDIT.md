# Portfolio Content Migration Audit

Source of truth: Google Takeout export of the published Google Sites portfolio, checked against the `portfolio-migration` branch.

Purpose: preserve the old site's material, identify stale statements and thin project pages, and collect Simar's first-hand contribution details before writing final project summaries. This file is an internal working checklist, not website copy.

## Migration rules

- Keep the original meaning and technical claims; do not invent ownership, results, dates, or metrics.
- Fix spelling, grammar, and readability in the new presentation, but preserve a copy of the original writing in the legacy archive.
- Clearly flag stale/timeline-dependent statements and weak pages.
- For projects with only slides/photos, ask Simar about his exact contribution before writing a polished summary.
- A file appearing in the Takeout is not proof it has been copied into the GitHub repository or is rendering correctly.

## Published page inventory and review flags

| Original published page | New destination / treatment | Review status and flags |
|---|---|---|
| Home | Homepage and legacy Home notes | Rewrite the old student bio for current career stage. Check the old embedded video and all Home images. |
| Projects | Projects archive | Old page only says to use the dropdown. No project-specific text to migrate. |
| Internship Experience | Work/experience area | Old page is navigation-only. Ensure experience pages are linked from Work, not lost in a hidden archive. |
| Amazon Robotics | Work / Amazon experience | Original page has only a short intro and a redacted final presentation. **Contribution details are thin in the old page**; use verified resume/work details, then ask Simar to confirm which achievements are safe to publish. |
| Auto Pallet | Work / AutoPallet experience | Published HTML page is blank apart from site chrome. **Needs Simar's contribution details**; do not infer from photos alone. |
| Sorcerer.Earth | Work / Sorcerer experience | Original text has substantive contributions, but verify dates and which details/images may be public. Preserve confidentiality note. |
| Keiser Wire Raceway | Project page | Substantial original text exists. Clean grammar and remove repetitive image narration; preserve the broader work (wire cutter, jigs, drawings, racks, ramp, raceway). Verify any outcome metrics before adding them. |
| 30 lb Robot | Combat robot project | **Stale:** “Next up” / Vegas BattleBots 30 lb TV show is future-facing and needs updating or removal. Original project text is substantial; clean up the wording and preserve leadership + hands-on build details. |
| 15 lb Robot | Combined 15/12 lb combat robot page | **Stale:** “MAKING VERSION 2 FOR THE DISCOVERY CUBE IN APRIL. COMING SOON.” Needs current status. Preserve original role, BOM, mentoring, AR500 fabrication, pocketed chassis, and FEA. Ask Simar to confirm what applies to Poundtown vs. Global Pounding. |
| Combat Robotics | Combat Robotics overview | **Stale:** “currently focusing on the 30lb robot” and the BattleBots/Glitch premiere caveat may be outdated. Update to current leadership and robot portfolio. |
| Combat Box | Combat Box project | Original text is useful; clean grammar and check whether it is now used for larger robots. The two original images exist in the Takeout and should both render in the new gallery. |
| Humanoids | Humanoid Robotics / UFB project | Original text includes useful UFB3/UFB5 context and detailed technical contribution notes. **Update “now collaborating” / “UFB Future” if stale**, verify public naming and links. |
| Robotic Hand | 15-DOF hand | **Contribution follow-up required:** old page explicitly says to ask for a detailed description and only says Simar made the sensor component and helped with the robotic portion. Keep this narrow until he gives more detail. The report and machine-shop presentation should remain linked. |
| Robotic Arms | Robotic Arms / GroceryGizmo | Old page is mostly image captions and a GroceryGizmo link; **needs Simar's exact contribution details** for the broader robotic-arms page. Do not conflate all arm work with GroceryGizmo. |
| IoT Millipede Monitor | IoT project page | Text is short and team-level. **Needs Simar's individual contribution details**; slides/video/report are the main evidence. |
| Towel Holder Innovation | Towel Holder project | Some role detail exists (led CAD/concept, teammates wrote report/drawings). Ask what the part was, design constraints, manufacturing process, and any test/results. |
| Stats Project | Statistics / Data project | Basic text exists but **needs concrete project question, dataset, methods, and result** if Simar remembers them. Keep the note that the Jupyter Hub work itself cannot be shared. |
| NASA HUNCH | NASA HUNCH — Magnetic Boots | Almost no narrative: presentation link + “Placed as a National Semi-Finalist.” **Needs contribution details** (problem, design, what Simar personally owned, validation, team role). |
| Motorcycle Comms | Motorcycle Communication System | Substantial team/product-development text exists. Clean grammar; ask what hardware/CAD/electronics/prototyping work Simar personally completed and what was only proposed. |
| Cars and Machines | Cars & Machines | Substantial narrative exists, including Corvette, Jeep restoration, lathe, machining, welding/milling. Clean and organize by project; verify which details/photos are okay to feature. |
| Hobbies/Other | Hobbies / Other | Mostly an intro/category page. Keep concise and direct users to Cars & Machines and NASA HUNCH. |
| Class Projects | Class Projects archive | Navigation-only; no original project narrative to migrate. |
| Resume | Resume page | Old page is an embedded PDF only. Ensure the current resume link is intentional and opens. |

## Contribution questions for Simar

Please answer only the items you know; short bullet answers are fine. I will turn them into polished summaries using both these answers and the existing project materials.

### Priority 1 — pages with little or no individual contribution text

1. **Auto Pallet Robotics:** Which robot(s) or prototypes did you work on? What did you personally design, fabricate, wire, program, integrate, test, or repair? Which work was yours versus teammates'?
2. **Robotic Arms (outside GroceryGizmo):** What was the arm/platform, and what did you personally do? Separate class labs, the friend's research arm, and Amazon exposure if possible.
3. **IoT Millipede Monitor:** What did you personally build or own (sensors, actuators, electronics, firmware, mechanical design, data, integration, presentation)?
4. **NASA HUNCH / Magnetic Boots:** What was your specific design contribution, team role, prototype, and validation? What did the team build and how was the semi-finalist result earned?
5. **15-DOF Robotic Hand:** What sensor did you make? What hardware/electronics/software did you personally design or assemble? What exactly was your role in the robotic portion?
6. **Stats Project:** What was the question/data, what analysis did you implement, and what did the results show?
7. **Towel Holder:** What was the design and manufacturing constraint? What CAD, drawings, prototypes, testing, or DFM work did you personally do?
8. **Amazon Robotics:** Which details from your resume or internship presentation can be used publicly? Any NDA restrictions beyond the redacted presentation?

### Priority 2 — stale status or project ownership

9. **30 lb robot:** What ultimately happened after the Orange County Maker Faire? Should the Vegas/BattleBots “coming next” statement be removed, replaced with the actual competition outcome, or retained as historical context?
10. **15/12 lb robots:** What is the current status of Poundtown and Global Pounding? Which robot corresponds to each of the four original images, and what should the old Discovery Cube “coming soon” line become?
11. **Combat Robotics / Glitch:** What current wording is safe for Glitch and the club? Remove the old “cannot speak until premiere” caveat?
12. **Humanoids/UFB:** Is the “help build future humanoid leagues” statement still current? Which events, responsibilities, and footage should be highlighted?
13. **Motorcycle Comms:** Which components reached a working prototype, and which were concepts/proposals only?
14. **Keiser / Cars & Machines:** Any important outcomes or technical specifics missing from the original descriptions that you want preserved?

## Asset reconciliation notes

The Takeout contains 23 published HTML pages and 57 published JPGs (114 JPGs total when including the DRAFT copy). The published and draft copies should not be counted as 114 unique published images.

Known image files in the published Takeout that must be checked against the repository and displayed galleries:
- 30 lb Robot: 11 photos
- Home: 11 photos
- Humanoids: 6 photos
- Combat Box: 2 photos
- 15 lb Robot: 4 photos
- Cars and Machines: 7 photos
- Keiser Wire Raceway: 8 photos
- Robotic Arms: 4 photos
- Sorcerer.Earth: 3 photos

The new site's gallery arrays currently show only 7/11 30 lb photos, 9/11 Home photos, and 5/6 Humanoids photos. The new project renderer also needs to map both Combat Box images into its gallery. These are repository/gallery tasks, not questions for Simar.

## Completion standard

Do not call migration complete until every published page is accounted for, every published image is either present and rendered or explicitly excluded with a reason, every original document/video/link is preserved or flagged as unavailable, stale statements are resolved, and Simar has had a chance to fill the contribution gaps above.
