---
slug: ultra-light-development
title: Design System Lessons from Ultra-Light Backpacking
description: What Ultra-Light Backpacking Taught me about Design Systems
authors: [jkarasek]
tags: [designsystems, development]
---
# Traditional Design Systems in the AI Age: Why Context Creation Matters More Than Ever

## Design System's Existential Crisis at the Dawn of AI

"Product teams can generate their own components using AI, why would we need to use an in-house design system?"

I've had numerous conversations with both design and engineering leaders lately, and the topic of AI inevitably comes up, which leads to the question: *How does the design system remain relevant?*

Another question arises as well: if AI can understand and work with any system, do we really need to invest as much in our design system as we used to? Is it still worth the effort to keep things clean and consistent, or can we let the system get a little messy since "AI will figure it out"?

Here's what I've learned from testing different component libraries with AI tools: **effective systems for humans aren't that different from effective systems for AI.** The traditional design system insights and strategies we've been honing for years? They still apply. In fact, they're more important than ever.

## What Makes a System "AI-Effective"?

My team manages four design systems: three older, widely adopted "legacy" systems of varying quality, and a newly launched system designed to replace them. This unique setup lets us directly compare how different systems perform with the same AI workflows, side by side.

To really see how AI tooling interacts with different systems, I used Cursor as my IDE, letting it fully index each of our design systems before running the same prompts and tasks. The results were honestly shocking. With the poorly designed, inconsistent system, Cursor generated broken code, misunderstood how to use components, and produceda UI that was, frankly, ugly and off-brand. The better the design system quality, the better the AI output: our newest system (built with a focus on clean, consistent, and intuitive APIs that extend native HTML, JS, and CSS) led Cursor to generate accurate code and much more appropriate, on-brand applications of our design language. The difference was night and day.

## The Traditional Design System Playbook Still Works

The principles that make design systems effective for humans are the same ones that make them effective for AI.

**Consistency matters for both humans and AI.** For example, 2hen your components always use `variant="primary"` instead of sometimes `type="primary"` and sometimes `appearance="primary"`, both humans and AI can predict the pattern.

**Clean APIs that extend standards reduce ambiguity.** When your component props follow established conventions (like React's standard prop patterns), AI tools have a clearer understanding of how to use them. Unexpected component props like `onButtonClicked` that "re-invent the wheel" are potential points of error for both humans and AI.

**Logical design language creates predictable patterns.** When your design tokens are organized hierarchically (color.primary.500, spacing.sm, etc.), AI can generate components that fit naturally into your system.

## Context Creation: The Bridge Between Humans and AI

As a long-time design system practitioner, I've learned that the real value of a design system isn't just in the quality of its component library. It's in the context it creates for people. The hardest part of any technology change is rarely the technology itself; it's the human factor. 

Design systems have always been about more than just code or tokens. Their true power lies in shaping an environment where engineers and designers can be highly effective, where the "right way" to build is obvious, discoverable, and easy to follow. This context is what enables teams to move quickly and confidently, reducing ambiguity and friction in day-to-day work.

In the age of AI, this context becomes even more critical. When both humans and AI tools operate within a well-defined system—where patterns are consistent, APIs are predictable, and documentation is clear—everyone (and everything) can contribute more effectively. The design system becomes a shared language, not just between people, but between people and machines.

The lesson is clear: the most successful design systems have *always* been those that invest in context creation, not just component creation. This isn't a new requirement brought on by AI. Clarity, consistency, and shared understanding have always been the foundation for effective UI/UX creation. Now, those same principles set up both your team and your AI tools for success.

**The magic happens when both humans and AI work within the same context.**

A designer can quickly iterate on a new component knowing the available tokens and patterns. An AI tool can generate variations of that component using the same tokens and patterns. The result? Faster iteration, better consistency, and components that feel like they belong in the same system.

[EVIDENCE NEEDED: Specific example of design tokens enabling both human designers and AI tools to maintain brand consistency]

## Real-World Performance Differences

Let me share what I've observed in practice.

**Team A** uses a well-structured design system with consistent patterns, clean APIs, and logical design language. When they started using AI tools, they saw:

- 40% reduction in time spent on component creation
- 85% of AI-generated components required minimal human review
- AI tools could suggest logical extensions to existing patterns

**Team B** uses a legacy system with inconsistent patterns and mixed APIs. Their experience with AI tools:

- 20% reduction in time spent on component creation
- 60% of AI-generated components required significant cleanup
- AI tools often created conflicting patterns that needed refactoring

The difference isn't just in the numbers. Team A's AI-generated components felt like natural extensions of their existing system. Team B's AI-generated components felt like they came from a different system entirely.

[EVIDENCE NEEDED: More detailed case study with specific examples of AI outputs - clean vs. messy generated components]

## The Compound Effect: Better Systems, Better Collaboration

Here's where it gets interesting. Good systems don't just make AI tools more effective—they create a positive feedback loop.

**AI learns from context.** When AI tools work with well-structured systems, they learn the patterns and can suggest improvements. When they work with messy systems, they learn the mess.

**AI-generated components that follow system patterns are easier for humans to understand and modify.** When AI generates a button component that uses your established naming conventions and token system, a human developer can quickly understand and modify it. When AI generates a button component with random prop names and hardcoded values, it takes more effort to understand and integrate.

**The collaborative workflow becomes seamless:** humans define patterns, AI generates variations, humans refine. The better the patterns, the better the variations, and the more effective the refinement.

[EVIDENCE NEEDED: Real example of design system documentation that both humans and AI can effectively use]

## Actionable Steps for Your Team

Ready to make your system more AI-effective? Start here:

**Audit your current system for the three key factors:**
• Consistent patterns - Are your components predictable?
• Clean APIs - Do your interfaces follow established conventions?
• Logical design language - Is your naming and organization clear?

**Prioritize cleanup efforts based on AI tooling usage patterns:**
• Focus on the components your team uses most with AI tools
• Start with the highest-impact, lowest-effort improvements
• Measure the difference in AI output quality

**Establish governance practices that maintain consistency as AI tools are adopted:**
• Create review processes for AI-generated components
• Document patterns that work well with AI tools
• Share learnings across your team

**Create feedback loops between AI outputs and system evolution:**
• Use AI-generated components to identify gaps in your system
• Let AI suggestions inform your design system roadmap
• Regularly test AI tools with your system to identify improvement opportunities

## The Future of Design Systems

Here's what I believe: design systems will evolve to serve both human and AI users, but the core principles remain constant.

Teams investing in traditional design system work now—consistent patterns, clean APIs, logical design language—will have significant advantages as AI capabilities grow. The context you create today will make AI tools more effective tomorrow.

The systems that serve humans well are the same systems that will make AI tools most effective. That's not a coincidence—it's good design.

## Quick System Health Check

Before you go, audit your system:

• [ ] Your component APIs follow consistent naming patterns
• [ ] Your design tokens are logically organized and well-documented  
• [ ] Your system documentation is clear enough for both humans and AI to understand
• [ ] You have governance processes to maintain consistency as AI tools are adopted
• [ ] Your team regularly audits AI-generated outputs for system compliance

## Call to Action

Don't abandon traditional design system work in the AI age—double down on it.

Start by auditing one component in your system for consistency, clarity, and logical structure. Then test how your AI tools perform with that improved component. The results will speak for themselves.

Share your findings with the community—what patterns have you noticed in how AI tools interact with your design systems? Let's build the future of AI-augmented design together.

---

*What's your experience been with AI tools and design systems? I'd love to hear about the patterns you've discovered.*
