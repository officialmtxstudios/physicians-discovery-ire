import { useRef } from "react";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleHeadline from "@/components/ArticleHeadline";
import ArticleFooter from "@/components/ArticleFooter";
import ImageSection from "@/components/ImageSection";
import TextSection from "@/components/TextSection";
import CTAButton from "@/components/CTAButton";
import StickyCTA from "@/components/StickyCTA";

export default function Index() {
  const drMitchellSectionRef = useRef<HTMLHeadingElement>(null);
  const monicaImageRef = useRef<HTMLDivElement>(null);

  const handleCTA = () => {
    // Handle CTA action here
    console.log("CTA clicked");
  };

  return (
    <div className="article-container">
      <ArticleHeader />

      <ArticleHeadline
        title="After 20 Years Treating Women's Hormonal Changes, I Finally Understand Why Upper Arm Fat Won't Budge—And How Women Are Losing Their Bat Wings In Just 8 Weeks Without Surgery or Endless Arm Exercises"
        subheadline=""
        authorName="Sarah Mitchell, MD - Board-Certified Physician Studying Women's Metabolic Health"
        authorImage="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fb8545eecc8404b2d9d48161b6e183bed?format=webp&width=96"
        date="December 29, 2025"
      />

      <main className="article-main">
        {/* Hero Image with responsive srcSet */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1bb0bc83114f4fbbb11ddc9afe0f7512?format=webp&width=800"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1bb0bc83114f4fbbb11ddc9afe0f7512?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1bb0bc83114f4fbbb11ddc9afe0f7512?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1bb0bc83114f4fbbb11ddc9afe0f7512?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1bb0bc83114f4fbbb11ddc9afe0f7512?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1bb0bc83114f4fbbb11ddc9afe0f7512?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1bb0bc83114f4fbbb11ddc9afe0f7512?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1bb0bc83114f4fbbb11ddc9afe0f7512?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1bb0bc83114f4fbbb11ddc9afe0f7512?format=webp&width=2000"
          className="hero-image"
          alt="Featured content"
        />

        {/* Opening Section */}
        <TextSection>
          <p>For almost twenty years, I've sat across from women who were doing everything right.</p>
          <p>They ate clean.</p>
          <p>They exercised every day.</p>
          <p>They tried every protocol I gave them.</p>
          <p>And yet, their upper arms stayed soft and jiggly.</p>
          <p>Month after month, they'd come back to my office. Frustrated. Defeated… Sure they were failing somehow.</p>
          <p>I'd review their information. Check their hormones. Change their plans.</p>
          <p>But deep down, I was just as confused as they were.</p>
          <p>I blamed menopause.</p>
          <p>They blamed themselves.</p>
          <p>We were both wrong.</p>
        </TextSection>

        {/* IMAGE 1 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1d38e54c09c543a4af29a42fe56f3dd5?format=webp&width=800"
          alt="Dr. Sarah Mitchell - Board-Certified Physician"
        />

        {/* The Day Everything Changed */}
        <TextSection>
          <h2>The Day Everything Changed</h2>
          <p>Then I went to a conference on metabolic adaptation.</p>
          <p>A researcher showed findings that shocked me.</p>
          <p>"The upper arm area doesn't just store fat differently after hormones change," she said. "It enters a state of metabolic hibernation."</p>
          <p>Not slower. Not stubborn.</p>
          <p>Complete shutdown.</p>
          <p>The tissue isn't ignoring your efforts. It literally can't hear the signals anymore.</p>
        </TextSection>

        {/* IMAGE 2 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fa4e77345e3ab4dae92c8d23b28ac1e10?format=webp&width=800"
          alt="Medical measurement and body composition assessment"
        />

        {/* Why Your Lower Belly Stopped Responding */}
        <TextSection>
          <h2>
            Why Your Upper Arms Stopped Responding (And Why It's Not Your Fault)
          </h2>
          <p>Here's what's really happening—and why nothing you've tried has worked:</p>
          <p>When your hormone levels drop (from menopause or aging), three big changes happen at once in your upper arm tissue:</p>
          <h3>1. Blood flow drops by up to 40%</h3>
          <p>Think of it like a garden hose that got kinked—the water can barely trickle through anymore.</p>
          <p>Less blood means less oxygen and fewer nutrients.</p>
          <p>The fat cells go to sleep.</p>
          <p>They stop responding to the signals that normally make them release the fat.</p>
          <h3>2. The tissue under your skin gets stiff and "stuck"</h3>
          <p>It's like cling wrap that got crumpled and won't lay flat anymore—it bunches up and traps everything underneath.</p>
          <p>The tissue that surrounds your arm muscles loses stretch. It stops moving right.</p>
          <p>This creates two problems:</p>
          <p>First, it traps fluid, creating the jiggly, wobbly look of bat wings.</p>
          <p>Second, it blocks the muscle underneath. So even when you do arm exercises, the muscle can't work properly through the stuck tissue.</p>
          <h3>3. Cell communication breaks down</h3>
          <p>Like the phone lines got cut—or the Wi-Fi went out. The cells are there, they're just not getting the signal anymore.</p>
          <p>The cells stop responding to the hormones that control fat storage.</p>
        </TextSection>

        {/* IMAGE 4 */}
        <ImageSection
          src="https://cdn.builder.io/o/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F91fafb67cb444065a7ba85082e5378aa?alt=media&token=834efcc7-c989-40c3-b538-ddfbfa49c34c&apiKey=310e5dbc08df4ac4b4ffe8becccf5fde"
          alt="Cellular communication breakdown visualization"
        />

        {/* Result Section */}
        <TextSection>
          <p>The result?</p>
          <p>You can eat less. You can do cardio. You can do arm exercises.</p>
          <p>But that area stays the same—because the tissue shut down.</p>
          <p>Your body isn't ignoring your work. That area literally can't take part anymore.</p>
          <p>Like a bear that went into hibernation—it's not dead, it's just deeply asleep and not responding to anything.</p>
        </TextSection>

        {/* Why Everything You've Tried Has Failed */}
        <TextSection>
          <h2>Why Everything You've Tried Has Failed</h2>
          <p>Once I understood this, I looked back at everything I'd told women to do—and saw why none of it worked for arms:</p>
          <h3>Diet and exercise?</h3>
          <p>They work great for tissue that's still active. But they can't "wake up" tissue that's already shut down.</p>
          <p>It's like shouting at someone wearing noise-canceling headphones—it doesn't matter how loud you yell, they can't hear you.</p>
          <p>You'll lose fat everywhere else while those upper arms stay the same.</p>
        </TextSection>

        {/* IMAGE 5 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F13d695dc2d6c4eed8142d039c365b0d8?format=webp&width=800"
          alt="Why arm exercises don't work on dormant tissue"
        />

        {/* Why Everything Failed Continued */}
        <TextSection>
          <h3>Arm exercises and tricep dips?</h3>
          <p>They make the muscle stronger underneath—but if the tissue above it is stiff and blood flow is low, you're just making a muscle that's trapped under sleeping tissue.</p>
          <h3>Creams and treatments?</h3>
          <p>They can't go deep enough to reach the stuck tissue or affect how cells work. They work on the surface while the problem is three layers deep.</p>
          <h3>Hormone therapy?</h3>
          <p>Even when we fix hormone levels, if the tissue already shut down, it won't just "wake up" because hormones get better.</p>
          <p>The damage is done.</p>
          <p>I saw we'd been treating the wrong problem.</p>
          <p>We weren't dealing with fat that needed to burn.</p>
          <p>We were dealing with tissue that needed to wake up.</p>
        </TextSection>

        {/* IMAGE 5 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fe10d571a4b6a4ea087407f1d43f60b77?format=webp&width=1200"
          alt="Woman performing stretching and core engagement exercises"
        />

        {/* The Missing Link */}
        <TextSection>
          <h2>The Missing Link: Waking Up the Tissue</h2>
          <p>After that conference, I became obsessed with one question:</p>
          <p>If tissue can shut down, can it be brought back?</p>
          <p>I spent months reading research about tissue rehab. Most of it was about recovery after surgery or sports injuries.</p>
          <p>But the answer was clear: certain types of stimulation could restore cell communication and "wake up" sleeping tissue.</p>
          <p>The problem?</p>
          <p>These treatments needed expensive equipment and weekly clinic visits—physical therapy, special massage, professional devices.</p>
          <p>The women I worked with couldn't afford $150 a week forever.</p>
          <p>Then, six months ago, a woman came to my office and showed me something that changed everything.</p>
        </TextSection>

        {/* IMAGE 6 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F098e35ffc33748ff96ea4e95da4a5b83?format=webp&width=800"
          alt="Patient and physician consultation"
        />

        {/* Dr. Mitchell Discovery */}
        <TextSection>
          <h2>"Dr. Mitchell, I Think I Finally Found Something That Works"</h2>
          <p>Jennifer was 65.</p>
          <p>She had already gone through menopause.</p>
          <p>She'd been so frustrated—doing everything right, seeing results everywhere except her upper arms.</p>
          <p>Then one day she walked into my office looking different.</p>
          <p>Not thinner.</p>
          <p>But tighter. More toned.</p>
          <p>The loose, sagging look of her upper arms had clearly improved.</p>
          <p>"What did you do?" I asked right away.</p>
          <p>She pulled out a small rose-gold device from her bag.</p>
          <p>"I didn't believe it at first," she said. "But I read about how it works on all the tissue layers at once, not just the surface. I thought, worst case, I'd return it."</p>
          <p>She'd been using it four times a week for eight weeks.</p>
          <p>Same diet. Same exercise. Same life.</p>
          <p>"I started noticing changes around week three," she said. "The area felt tighter when I tensed my arm. In week six, I could see the difference."</p>
        </TextSection>

        {/* IMAGE 6 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fd2ab4bdf59204b5ab79267fb55d76f3e"
          alt="Woman holding ReSculpt device in professional setting"
        />

        {/* Why This Works */}
        <TextSection>
          <p>I was curious.</p>
          <p>As a doctor, I don't trust at-home devices.</p>
          <p>Most of them are overpriced junk that prey on desperate women.</p>
          <p>But Jennifer's results were real.</p>
          <p>And when she explained the technology (Multi-Layer Stimulation Reset™), it made perfect sense.</p>
        </TextSection>

        {/* Why This Works When Everything Else Failed */}
        <TextSection>
          <h2>Why This Works When Everything Else Failed</h2>
          <p>Here's what makes this different from every other device, cream, or plan:</p>
          <p>Most treatments work on ONE layer:</p>
          <ul>
            <li>Creams work on skin (surface only)<br /><br /></li>
            <li>Massage works on tissue (middle layer only)<br /><br /></li>
            <li>Exercise works on muscle (deep layer only)</li>
          </ul>
          <p>But the shutdown affects ALL THREE layers at the same time.</p>
          <p>The ReSculpt (the device Jennifer brought that day) uses Multi-Layer Stimulation Reset technology.</p>
          <p>It sends different signals to reach each tissue type.</p>
          <p>Think of it like this:</p>
          <p>Your skin responds to one signal.</p>
          <p>Your tissue responds to another.</p>
          <p>Your muscle responds to a third.</p>
          <p>Most devices use just one signal (usually for surface skin or basic muscle). That's why they feel nice but don't create real change.</p>
          <p>ReSculpt sends all three signals at once—going through the skin layer, waking up the tissue layer, and turning on the muscle layer in one session.</p>
          <p>It's not shaking fat away. It's not "melting" anything.</p>
          <p>It's restoring communication to tissue that went silent.</p>
          <p>It's doing what a trained physical therapist does with hands—but you control it at home.</p>
          <p>This is the same idea professional clinics use.</p>
          <p>And they charge $1,500+ per area because they understood the signal problem years before anyone else.</p>
          <p>But the technology got good enough that this level can now be done safely at home.</p>
        </TextSection>

        {/* IMAGE 7 */}
        <ImageSection
          src="https://cdn.builder.io/o/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F8e652f8789114204b74b4f0816da7d0b?alt=media&token=6dc28b9c-7633-4557-9fc6-7115dc42d078&apiKey=310e5dbc08df4ac4b4ffe8becccf5fde"
          alt="ReSculpt device showing multi-layer penetration into skin, fascia, and muscle"
        />

        {/* Why Clinics Charge So Much */}
        <TextSection>
          <h2>
            Why Clinics Charge $3,000+ For This (And Why You Don't Have To)
          </h2>
          <p>Here's something most women don't know:</p>
          <p>When you go to a professional clinic and pay $2,000-$4,000 per area, you're not paying for them to "work harder" on your fat or "burn more calories."</p>
          <p>You're paying for tissue re-signaling.</p>
          <p>Clinics understood the signal problem years before anyone else.</p>
          <p>They knew stubborn areas weren't stubborn because of too much fat.</p>
          <p>They were stubborn because the tissue stopped responding to signals.</p>
          <p>So they made multi-layer technology that could "wake up" sleeping tissue by sending exact signals to fat, tissue, and muscle all at once.</p>
          <p>That's why clinics get results when everything else fails.</p>
          <p>Not because they have magic machines—but because they finally fixed the actual problem.</p>
        </TextSection>

        {/* IMAGE 8 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fdec4597a8ce54b489867f2526e1bba41?format=webp&width=800"
          alt="Professional body sculpting clinic with advanced equipment"
        />

        {/* Clinic Cost Explanation */}
        <TextSection>
          <p>That's why clinics get results when everything else fails.</p>
          <p>
            Not because they have magic machines—but because they finally
            addressed the actual problem.
          </p>
          <p>
            Ten years ago,{" "}
            <b>
              &nbsp;this level of multi-layer stimulation required clinic-grade
              equipment
            </b>
            .
          </p>
          <p>
            It was expensive, immobile, requiring trained operators and multiple
            sessions at $500-$1,500 each.
          </p>
          <p>
            But advances in tissue-penetration technology have changed
            everything.
          </p>
          <p>
            <b>
              The same three-layer stimulation can now be delivered in a device
              you control at home.
            </b>
          </p>
          <p>The mechanism is identical.</p>
          <p>The delivery system has simply become accessible.</p>
          <p>ReSculpt doesn't "replicate" clinic technology.</p>
          <p>
            It uses the same core principle that makes clinics work, now refined
            for safe, consistent at-home use.
          </p>
        </TextSection>

        {/* If This Really Worked Section */}
        <TextSection>
          <h2>"If This Really Worked, Wouldn't Doctors Be Doing It?"</h2>
          <p>This is the question I hear most often—and it's a fair one.</p>
          <p>
            Here's the truth: Doctors have recommended similar technology, they
            just haven't been recommending at-home versions until recently.
          </p>
          <p>Why?</p>
          <p>
            Because until the last few years, at-home body devices fell into two
            categories:
          </p>
          <ul>
            <li>
              Surface-only stimulation (vibration belts, heated wraps) that
              couldn't penetrate deep enough to affect tissue metabolism
              <br />
              <br />
            </li>
            <li>
              Single-layer devices (basic EMS units) that could activate muscle
              but missed the fat and fascia layers entirely
            </li>
          </ul>
          <p>Neither could recreate true multi-layer stimulation.</p>
          <p>
            So doctors rightfully remained skeptical of at-home devices—because
            most of them didn't work.
          </p>
          <p>
            <b>What changed?</b>
          </p>
          <p>
            Advances in technology now allow multiple frequencies designed for
            different layers of tissue to be delivered simultaneously in a
            single device.
          </p>
          <p>This wasn't possible even five years ago.</p>
          <p>
            <b>
              ReSculpt is the first at-home device I've seen that delivers
              genuine three-layer stimulation
            </b>
            , the same mechanism clinics use.
          </p>
          <p>Is it exactly identical to a $60,000 clinic machine? No.</p>
          <p>
            But does it deliver the core mechanism (multi-layer tissue
            signaling) that makes clinic treatments effective?
          </p>
          <p>
            <b>Yes.</b>
          </p>
          <p>
            And because you control the frequency and consistency at home, many
            of the women I've recommended the device to actually see better
            results than they did with sporadic clinic visits.
          </p>
          <p>This isn't a "cheap alternative."</p>
          <p>It's the same science, evolved for accessibility.</p>
        </TextSection>

        {/* IMAGE 8 - Before What I Started Seeing Repeatedly */}
        <div className="w-full bg-white py-4 sm:py-6 px-4 sm:px-6 md:flex md:justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/o/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F38b5f427bcbe4115aa981017dfe9dfcc?alt=media&token=17fa9912-ff95-4145-985a-e69d08848335&apiKey=310e5dbc08df4ac4b4ffe8becccf5fde"
            alt="Before and after patient results"
            style={{
              aspectRatio: "1",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              maxWidth: "48rem",
              minHeight: "20px",
              minWidth: "20px",
              overflow: "hidden",
            }}
          />
        </div>

        {/* What I Started Seeing Repeatedly */}
        <TextSection>
          <h2 ref={drMitchellSectionRef}>What I Started Seeing Repeatedly</h2>
          <p>
            After Jennifer's results, I couldn't stop thinking about the
            mechanism.
          </p>
          <p>
            If Multi-Layer Stimulation could reactivate dormant tissue, it
            should work consistently—not just for one woman.
          </p>
          <p>
            <b>So I started recommending it to other women</b> who fit the same
            profile: doing everything right, but that upper arms remained
            stubbornly unresponsive.
          </p>
          <p>
            I didn't tell them what to expect. I simply explained the technology
            and suggested they try it for 8-12 weeks while maintaining their
            current routine.
          </p>
          <p>
            <b>What happened next completely surprised me.</b>
          </p>
        </TextSection>

        {/* Case Example 1: Linda */}
        <TextSection>
          <h3>
            Case Example #1: Linda, 62 – The "Bat Wings That Appeared Overnight"
          </h3>
          <p>Linda had always been slim and active.</p>
          <p>
            But around age 58, during menopause, her upper arms changed
            seemingly overnight.
          </p>
          <p>
            "I'd wave goodbye to someone and feel my arm keep moving," she told
            me, mortified. "I started wearing cardigans in 35-degree heat just
            to hide them."
          </p>
          <p>
            She'd been doing arm exercises with light weights three times per
            week. Her trainer kept telling her to "build more muscle."
          </p>
          <p>But the sagging skin and jiggle only seemed to get worse.</p>
          <p>"I can feel the muscle underneath," she said, frustrated.</p>
          <p>
            "But there's all this loose, wobbly stuff on top that won't budge."
          </p>
          <p>
            <strong>Her approach:</strong> Used ReSculpt 10 minutes per day, 4
            days per week, while continuing her regular exercise routine.
          </p>
          <p>
            <strong>Timeline:</strong>
          </p>
          <ul>
            <li>
              <strong>Week 2:</strong> "The area feels tighter when I flex my
              arm."
              <br />
              <br />
            </li>
            <li>
              <strong>Week 5:</strong> "My sister asked if I'd had surgery. I
              told her no, but I could see what she meant. The hanging part is
              less... droopy."
              <br />
              <br />
            </li>
            <li>
              <strong>Week 8:</strong> "I measured. I'm down 2 inches around my
              upper arms. Same weight. Same routine. Just... firmer."
            </li>
          </ul>
        </TextSection>

        {/* IMAGE 10 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F86f9e78a67024a0d8bccf81185e00a50?format=webp&width=800"
          alt="Linda's case example and results"
        />

        {/* Linda Notes */}
        <TextSection>
          <p>
            <strong>My notes:</strong> When I saw Linda at week 8, the fascial
            tissue had noticeably improved in mobility.
          </p>
          <p>
            The "bat wing" quality was significantly reduced. Her tricep
            engagement was visibly stronger.
          </p>
          <p>The tissue had quite literally woken back up.</p>
        </TextSection>

        {/* Case Example 2: Patricia */}
        <TextSection>
          <h3>
            Case Example #2: Patricia, 67 – "I've Been Hiding My Arms for 15
            Years"
          </h3>
          <p>Patricia came to me devastated.</p>
          <p>
            "I haven't worn a short-sleeved top in public since I was 52," she
            said. "Not to the beach. Not to family gatherings. I feel like I'm
            trapped."
          </p>
          <p>
            She'd tried everything—tricep exercises, resistance bands, even
            those arm compression sleeves. Nothing worked.
          </p>
          <p>
            "The exercises made my arms stronger, but they still looked the
            same," she said. "Just... saggy. Crepey. Old."
          </p>
          <p>
            <strong>Her approach:</strong> Used ReSculpt 10 minutes per day, 5
            days per week, combined with her existing walking routine.
          </p>
          <p>
            <strong>Timeline:</strong>
          </p>
          <ul>
            <li>
              <strong>Week 3:</strong> "I don't see much yet, but it feels
              firmer. Like there's actually muscle definition under there now."
              <br />
              <br />
            </li>
            <li>
              <strong>Week 6:</strong> "My husband said, 'Your arms look
              different.' I thought he was being nice. Then I looked in the
              mirror wearing a singlet. He was right."
              <br />
              <br />
            </li>
            <li>
              <strong>Week 10:</strong> "I wore a sleeveless dress to my
              granddaughter's birthday party. First time in 15 years. I didn't
              think about my arms once the entire day."
            </li>
          </ul>
        </TextSection>

        {/* IMAGE 11 - Patricia's case example and results */}
        <div className="image-section">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F1033a1ad4f02404a8c74eaeb91218e9e?format=webp&width=800"
            alt="Patricia's case example and results"
            style={{
              aspectRatio: "1.78",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              minHeight: "20px",
              minWidth: "20px",
              overflow: "hidden",
            }}
            className="section-image"
          />
        </div>

        {/* Patricia Notes */}
        <TextSection>
          <p>
            <strong>My notes:</strong> Patricia's case was particularly moving
            because the psychological shift was as dramatic as the physical one.
          </p>
          <p>This wasn't just about appearance—it was about freedom.</p>
          <p>
            The tissue reactivation gave her back the confidence to stop hiding.
          </p>
        </TextSection>

        {/* Case Example 3: Monica */}
        <TextSection>
          <h3>
            Case Example #3: Monica, 59 – The "I've Tried Everything" Case
          </h3>
          <p>Monica walked into my office with a list.</p>
          <p>
            She'd tried: special arm exercises from YouTube, firming creams,
            collagen supplements, three different personal trainers, and even
            considered arm lift surgery.
          </p>
          <p>
            "My surgeon quoted me $12,000," she said, nearly in tears. "I can't
            afford that. But I hate my arms so much I was considering it
            anyway."
          </p>
          <p>
            Her arms weren't dramatically large—they were just loose, soft, and
            completely unresponsive to everything she'd tried.
          </p>
          <p>
            <strong>Her approach:</strong> Used ReSculpt 15 minutes per day, 3
            days per week, while continuing her current Pilates routine.
          </p>
          <p>
            <strong>Timeline:</strong>
          </p>
          <ul>
            <li>
              <strong>Week 4:</strong> "I almost quit because I wasn't seeing
              anything. Then I put on a dress I wore last month and the sleeves
              fit way better."
              <br />
              <br />
            </li>
            <li>
              <strong>Week 7:</strong> "My Pilates instructor asked what I
              changed. She said my arm definition during class is noticeably
              stronger."
              <br />
              <br />
            </li>
            <li>
              <strong>Week 12:</strong> "I finally understand what happened. It
              wasn't about losing fat. My body just needed to remember how to
              use that area again."
            </li>
          </ul>
        </TextSection>

        {/* IMAGE 9 - Monica's case example and results */}
        <div className="image-section" ref={monicaImageRef}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fa55d724d6cb342099e242301fb3d9c2b?format=webp&width=800"
            alt="Monica's case example and results"
            style={{
              aspectRatio: "1.78",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              minHeight: "20px",
              minWidth: "20px",
              overflow: "hidden",
            }}
            className="section-image"
          />
        </div>

        {/* Monica Notes */}
        <TextSection>
          <p>
            <strong>My notes:</strong> Monica's case taught me something
            critical.
          </p>
          <p>
            Many women are trying to tone arms that aren't metabolically active
            enough to respond.
          </p>
          <p>
            Once we reactivated the tissue, her existing healthy habits finally
            had something to work with.
          </p>
          <p>
            She improved another inch in her upper arms between weeks 8-12,
            despite no changes to diet or exercise.
          </p>
        </TextSection>

        {/* CTA Before Why This Technology Works */}
        <div className="cta-section">
          <div className="cta-container">
            <div className="cta-group">
              <CTAButton href="https://www.ovaliss.com/products/resculpt-aus-arm">
                Check ReSculpt Availability
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Why This Technology Works */}
        <TextSection>
          <h2>Why This Technology Works (And Why Most Devices Don't)</h2>
          <p>
            After watching woman after woman experience similar results, I
            started understanding exactly why ReSculpt succeeds where other
            approaches fail.
          </p>
          <p>Here's the difference:</p>
          <p>
            Most at-home devices use single-frequency vibration—essentially a
            strong massage that feels good in the moment.
          </p>
          <p>
            But they can't penetrate deep enough to affect fascial mobility or
            muscle activation.
          </p>
          <p>
            You might feel temporary smoothness from increased surface
            circulation.
          </p>
          <p>But the underlying problem remains untouched.</p>
          <p>
            <b>
              ReSculpt uses Multi-Layer Stimulation Reset—a system that delivers
              layered frequencies simultaneously
            </b>
            , each calibrated to reach a different tissue depth:
          </p>
          <ul>
            <li>
              Surface frequency stimulates skin microcirculation and lymphatic
              drainage
              <br />
              <br />
            </li>
            <li>
              Mid-layer frequency mobilizes fascial tissue and breaks up
              adhesions
              <br />
              <br />
            </li>
            <li>
              Deep frequency activates neuromuscular response and restores
              metabolic signaling
            </li>
          </ul>
          <p>Think of it like a defibrillator for dormant tissue.</p>
          <p>It doesn't burn fat or melt anything away.</p>
          <p>It restarts the metabolic conversation that had gone silent.</p>
          <p>Once that communication is restored:</p>
          <ul>
            <li>
              Blood flow increases to the area.
              <br />
              <br />
            </li>
            <li>
              Fascia regains mobility.
              <br />
              <br />
            </li>
            <li>
              Muscle can engage properly again.
              <br />
              <br />
            </li>
            <li>Fat cells start responding to normal metabolic signals.</li>
          </ul>
          <p>
            And then your healthy habits start working on that area again
            (finally).
          </p>
        </TextSection>

        {/* IMAGE 14 - How the technology works */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04"
          alt="How the technology works"
          style={{
            aspectRatio: "1.78",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            marginTop: "20px",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden",
          }}
        />

        {/* Setting Realistic Expectations */}
        <TextSection>
          <h2>Setting Realistic Expectations (Because I'm A Doctor)</h2>
          <p>I need to be very clear about something:</p>
          <p>
            <b>This is not magic.</b>
          </p>
          <p>
            <b>This is metabolic reactivation.</b>
          </p>
          <p>
            If you're looking for a device that melts fat while you sleep, this
            isn't it.
          </p>
          <p>
            If you want toned arms without effort, this won't give you that.
          </p>
          <p>But if you're someone who:</p>
          <ul>
            <li>
              Eats well and exercises consistently,
              <br />
              <br />
            </li>
            <li>
              Has lost weight everywhere except in your upper arms,
              <br />
              <br />
            </li>
            <li>
              Feels like that specific area "stopped responding" after hormonal
              changes,
              <br />
              <br />
            </li>
            <li>
              Has tried everything and can't understand why that area won't
              budge,
            </li>
          </ul>
          <p>...then the problem likely isn't your effort.</p>
          <p>It's tissue dormancy.</p>
          <p>And that's exactly what this technology addresses.</p>
          <p>You still need to maintain healthy habits.</p>
          <p>
            You still need to be patient (most of the women saw noticeable
            changes between weeks 4-8, with continued improvement through week
            12).
          </p>
          <p>
            But those habits will finally work with you instead of against
            silent tissue.
          </p>
        </TextSection>

        {/* Why I'm Comfortable Sharing This */}
        <TextSection>
          <h2>Why I'm Comfortable Sharing This</h2>
          <p>As a physician, I don't typically recommend at-home devices.</p>
          <p>Most of them are overpriced and under-researched.</p>
          <p>But ReSculpt is different for three reasons:</p>
          <h3>1. The mechanism is scientifically sound.</h3>
          <p>Multi-Layer Stimulation isn't new technology.</p>
          <p>
            It's been used in clinical settings for neuromuscular re-education
            and post-surgical rehabilitation for years.
          </p>
          <p>This device makes it accessible for at-home use.</p>
          <h3>
            2. It's non-invasive with no contraindications, and it offers a
            proper clinical trial period.
          </h3>
          <p>
            Unlike injections, surgery, or even some aggressive manual
            therapies, <b>this has an extremely low risk profile</b>.
          </p>
          <p>The worst case scenario is it doesn't work for you.</p>
          <p>
            And they offer a <b>100-day money-back guarantee</b> for exactly
            that reason.
          </p>
          <p>Why 100 days specifically?</p>
          <p>Because tissue reactivation isn't instant.</p>
          <p>
            It takes 4-6 weeks of consistent use for metabolically dormant
            tissue to "wake up" and start responding to signals again.
          </p>
          <p>
            A 30-day guarantee wouldn't be enough time to see if your tissue
            reactivates.
          </p>
          <p>100 days is a genuine clinical trial period.</p>
          <h3>3. It addresses the actual problem, not the symptom.</h3>
          <p>Most treatments try to burn fat or tighten skin.</p>
          <p>This reactivates tissue metabolism.</p>
          <p>
            Once the tissue is awake again, your body can do what it's supposed
            to do naturally.
          </p>
        </TextSection>

        {/* IMAGE 15 - Clinical research and evidence */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2"
          alt="Clinical research and evidence"
          style={{
            aspectRatio: "1.78",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            marginTop: "20px",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden",
          }}
        />

        {/* A Note on Availability */}
        <TextSection>
          <h2>A Note on Availability (And Why I'm Sharing This)</h2>
          <p>
            After seeing consistent results with ReSculpt across multiple women,
            <b>
              &nbsp;I reached out to Ovaliss (the company behind the device) and
              asked if they'd be willing to offer a special arrangement for
              women reading this article
            </b>
            .
          </p>
          <p>Here's why I did that:</p>
          <p>
            Most of the women who've had success with this device found it
            through hours of late-night research.
          </p>
          <p>
            They were comparing devices, reading reviews, second-guessing
            themselves.
          </p>
          <p>
            They told me they wished they'd found it sooner—and wished they
            hadn't paid full price while they were still skeptical.
          </p>
          <p>
            So I negotiated something I rarely do: a reduced introductory price
            specifically for readers of this article.
          </p>
          <p>
            <b>Instead of the standard $199, you can get ReSculpt for $119.</b>
          </p>
          <p>That's $80 off, not because the device is discounted.</p>
          <p>
            But because Ovaliss agreed that women dealing with metabolic tissue
            dormancy shouldn't have to pay full price.
          </p>
          <p>
            Not while they're still building belief that their bodies can
            respond again.
          </p>
          <p>
            <b>This pricing is only available through the link below.</b>
          </p>
          <p>I don't know how long they'll maintain it.</p>
          <p>
            (They mentioned it's based on current inventory levels, and once
            those units move, pricing returns to standard.)
          </p>
          <p>
            <strong>Here's what you get:</strong>
          </p>
          <ul>
            <li>
              ReSculpt device ($119 instead of $199)
              <br />
              <br />
            </li>
            <li>
              Free shipping
              <br />
              <br />
            </li>
            <li>
              100-day money-back guarantee (full reactivation trial period)
            </li>
            <li>Free ReSculpt Usage Guide</li>
          </ul>
        </TextSection>

        {/* Primary CTA Section */}
        <div className="cta-section">
          <div className="cta-container">
            <div className="cta-group">
              <CTAButton href="https://www.ovaliss.com/products/resculpt-aus-arm">
                Check ReSculpt Availability
              </CTAButton>
            </div>
          </div>
        </div>

        {/* My Recommendation */}
        <TextSection>
          <h2>My Recommendation</h2>
          <p>
            Here's what I want you to understand: You haven't failed. If you're
            reading this article, you've likely been very disciplined,
            consistent, and smart about your health.
          </p>
          <p>
            And this isn't about invalidating all that effort you've put in…
            it's about finally giving your arms the one thing they've been
            missing.
          </p>
          <p>A way to participate in the work you're already doing.</p>
          <p>
            If your upper arms have been unresponsive despite your best
            efforts—if you've felt that frustrating sense of "I'm doing
            everything right, why isn't this area changing?"
          </p>
          <p>
            <b>You don't need another arm exercise.</b>
          </p>
          <p>
            <b>You don't need more dieting.</b>
          </p>
          <p>
            <b>You don't need to "try harder."</b>
          </p>
          <p>You need to wake up tissue that went dormant.</p>
          <p>
            And that's exactly what ReSculpt is designed to do, all in the
            comfort of your own home, on your own schedule.
          </p>
          <p>If it works, you'll know.</p>
          <p>The area will start feeling different during arm flexion.</p>
          <p>Then you'll start seeing changes in how sleeves fit.</p>
          <p>Then you'll see visible contour improvement.</p>
          <p>
            <b>If it doesn't work, you return it.</b>
          </p>
          <p>No risk.</p>
          <p>
            But based on what I've seen in my office, and based on the mechanism
            itself, I believe any woman dealing with post-hormonal upper arm
            resistance will see meaningful improvement.
          </p>
          <p>Because the problem was never willpower.</p>
          <p>It was tissue that needed to be brought back online.</p>
        </TextSection>

        {/* IMAGE 12 - Final message and encouragement */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fe073678b776c47689dfb92290b348389?format=webp&width=800"
          alt="Final message and encouragement"
          style={{
            aspectRatio: "1.78",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            marginTop: "20px",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden",
          }}
        />

        {/* Secondary CTA Section */}
        <div className="cta-section">
          <div className="cta-container">
            <div className="cta-group">
              <CTAButton href="https://www.ovaliss.com/products/resculpt-aus-arm">
                Check ReSculpt Availability
              </CTAButton>
            </div>
          </div>
        </div>
      </main>

      <ArticleFooter />

      <StickyCTA
        triggerRef={monicaImageRef}
        href="https://www.ovaliss.com/products/resculpt-aus-arm"
      >
        Check ReSculpt Availability
      </StickyCTA>
    </div>
  );
}
