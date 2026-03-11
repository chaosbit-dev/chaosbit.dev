---
title: 'Calibrated Defiance'
description: 'What happens when you build the thing nobody asked for—and it turns out to be the thing everyone needed.'
pubDate: 'Mar 11 2026'
---
### The Empty Room

Last day of the offsite. The goal for the week was simple on paper: stand up a full CI/CD pipeline, end to end, on our new platform. Five days, one team, one room.

By Thursday afternoon, the room was mostly empty. People had started trickling out — flights to catch, families to get back to, energy spent. A single CloudFormation template got deployed. Zero complexity; it had already existed in git. The pipeline "worked," in the narrowest possible definition of the word.

We hit the goal, technically. We all knew what it meant.

I don't remember being angry. I remember being very quiet on the drive to the airport, turning the same question over: *How did we get here?* And the harder one: *What do you do with that frustration when the frustration isn't really at anyone?*

---

### A Waste of Time

First or second week on the job. I'm doing the thing you do when you're new — asking obvious questions to map the terrain. One of them: "How do I run this pipeline locally?"

The answer: you don't. That doesn't exist.

I filed it away. A few weeks later, once I had a little more context, I raised the idea of local dev tooling — something lightweight that would let engineers iterate without waiting on the full platform. The response came from someone whose judgment I respected: it's a waste of time and resources.

I want to be clear — that was a reasonable call. The org had priorities. Capacity was tight. They had context I didn't. I trusted it. Dropped it.

Months passed.

Then one of those nights happened. The kind where your brain won't shut off, and you know sleep isn't coming, so you might as well do something with the hours. Laptop open. Claude Code running. No plan, no proposal, no ask for permission — just a problem I kept thinking about and a stretch of uninterrupted quiet.

Twelve hours later, `hopl` existed. Working software. A local pipeline runner that did exactly what I'd described months earlier, except now it was real instead of theoretical.

I didn't tell anyone right away. It was a side project born out of insomnia, not a strategic initiative.

Then the offsite arrived. And here's where the story folds back on itself.

EC2 wasn't cooperating. The CD tooling was crawling. Engineers were spending more time debugging infrastructure than building pipelines. The only CI tooling that actually functioned all week — reliably, repeatedly, without drama — was the thing that had been called a waste of time.

I don't think the person who said that was wrong. They were working with the information they had. I just had a different kind of information — insomnia, stubbornness, and twelve hours.

---

### The Gap Between the Plan and the Problem

The offsite ended. EC2 was the official path forward — recommended by Harness, backed by senior engineers, already in the roadmap. There were reasons. Real ones. Budget alignment, vendor support, architectural consistency.

Working software was not among them. Not yet.

The frustration that sat with me on the flight home wasn't really at people. It was at the gap between the plan and the problem. The plan was coherent. The problem was that pipelines still weren't running, and the plan hadn't closed that gap in five days of focused effort.

I didn't go rogue immediately.

This is the part that matters, and the part I think most people get wrong when they have a strong opinion and the energy to act on it. I watched. I waited. I paid attention to the politics, the timeline pressure, the things that were being said in standups and the things that weren't. I waited long enough that I knew I had some cover — not permission exactly, but enough organizational space that building an alternative wouldn't read as insubordination.

I told two people: my PM and the IC whose help I'd need. That was it. Then I started building.

Kubernetes. Same platform, different compute. A path that could run the same pipelines without the EC2 dependency that was blocking everything.

After it was working — not half-working, not "promising," but actually running pipelines — I called a meeting. Decision makers in the room. Rivals and allies both. I was deliberate about the framing: no ambush, no gotcha, no "I told you so" energy. Just the facts.

*This works. Here are the cracks we're seeing with EC2. Here's what we have zero data to support about whether EC2 will close the gap on the timeline we need.*

The response was fair: "Give us two weeks to let EC2 catch up."

I took it. Two weeks is a reasonable ask when you're telling people the thing they've been building toward might not be the answer.

Two weeks became four. EC2 logged zero pipeline executions.

Week five: the first real apples-to-apples comparison. Same project. Both platforms. Jenkins — the legacy system we were migrating *away from* — ran the pipeline in 19 minutes. Harness on Kubernetes: 6.5 minutes.

The argument I would have lost in any meeting, the data won without me saying a word.

---

### What Defiance Can't Fix

This is the part of the story where I'm supposed to tell you we shipped the migration and everyone high-fived in the Slack channel.

Instead, the org churned. Half a dozen people left within a few months. Legacy commitments surged — the kind that don't show up on roadmaps but consume entire sprints. Capacity evaporated. My team, who had been ahead of schedule, stopped making progress on the migration to keep production running. The thing that was working got deprioritized in favor of the thing that was on fire.

I flew to Chicago for a leadership strategy session while they were back home keeping the lights on.

No guilt about that — I was where I was supposed to be. But I'm not going to pretend the optics felt great, or that I had a good answer when someone asked how the migration was going.

Calibrated defiance works when you can control the variables. When the gap between the plan and the problem is something *you* can close with effort and a few late nights. It doesn't work on org-wide capacity drain. It doesn't work on unexpected attrition, or the accumulated weight of technical debt you didn't create and can't prioritize away.

I'm writing this section because two wins in a row reads like a brag without it. I'm not writing from a position of "I solved it." I'm writing from 30,000 feet on a delayed flight home, clear-eyed about what's still hard and what building alone can't fix.

---

### The Pattern

Calibrated defiance isn't recklessness. It's not a philosophy. It's a read.

It's knowing the difference between *"This is wrong and I should fight it"* — which is usually just ego — and *"This is wrong and the timeline gives me room to prove it"* — which is the move.

You steel-man the other side. Genuinely. Not as a rhetorical exercise, but because they might be right, and you need to know the difference before you spend your credibility.

You wait for cover. Not forever, but long enough that you're not just the new guy with an opinion.

You tell two people. Not zero — that's reckless. Not ten — that's politics. Two: someone who can protect you, and someone who can help you build.

You build the thing. Not a deck, not a proposal, not a proof of concept that needs three more sprints. Working software. The kind that runs when someone asks "can you show me?"

You let the data make the argument. Nineteen minutes versus six and a half. You don't need a speech after that.

And you stay honest about where it doesn't work. Because if you oversell the pattern, you'll reach for it at the wrong moment — when the problem isn't a gap you can close, but a system that's grinding everyone down equally, and what's actually needed is patience, or a conversation, or something you can't build in twelve hours with your laptop open at 2 AM.

The team is still grinding. The migration is still real. But the path is clearer than it was six months ago — and it got clearer because someone kept building when building felt like the wrong call.

I've tested this theory twice now. Working software is a better argument than any planning doc.
