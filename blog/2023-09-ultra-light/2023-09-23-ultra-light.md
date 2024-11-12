---
slug: ultra-light-development
title: Design System Lessons from Ultra-Light Backpacking
description: What Ultra-Light Backpacking Taught me about Design Systems
authors: [jkarasek]
tags: [designsystems, development]
---

# What Ultra-Light Backpacking Taught me about Design Systems

I'm a big fan of backpacking: hiking to a remote location to camp under the stars with all my gear in a backpack.

In recent years I've become enamored with ultra-light backpacking.

Ultra-light backpacking is about reducing the weight of your gear as much as possible, making it easier to hike.
Here's how ultra-light backpacking has changed my approach design systems, making it easier to move forward faster.

<!-- truncate -->

## What is Ultra-Light Backpacking?

The idea of ultra-light backpacking is to reduce the weight of your gear as much as possible. A walk through the
woods with a 20 pound pack is a lot more enjoyable than a walk with a 50 pound pack. But pulling this off requires
a lot of thought and planning, and a big change in mindset.

Spending the night in the woods, far from civilization, with nothing but what you can carry on your back is scary.
The natural instinct is to pack everything you might need. But the reality is that many of the things we carry into
the woods just aren't needed. They end up weighing us down and making the experience less enjoyable.

## What can Ultra-Light Backpacking Teach Us About Design Systems?

As a design system engineer and consultant, I've seen the same problem pop up over and over again. The weight of
maintaining a design system has become so great that the team is no longer able to move forward. Much
like a hiker with a too heavy pack, the journey has become a difficult struggle.

There is a better way to approach design systems. And it's the same way that ultra-light backpackers approach
their gear. Here are a few lessons I've learned from ultra-light backpacking that I've applied to my work in design
systems.

## 1. **Pack Light for an Enjoyable Trip**

Everything that goes in the pack... you have to carry it. So pack light for an easy walk.

Put simply: the less a design system team has to maintain, the easier it is to move forward faster.

Especially in design systems, it's easy to get carried away with features, components, and documentation. But there
is a "carry cost" to everything you add. Every component you add to a design system is something that has to be
maintained, supported, and documented. Future changes have to take into consideration how they will affect what
already exists.

## 2. **Don't Pack Your Fears**

It's easy to pack for every possible scenario. But the reality is that most of the things we fear won't happen. And
if they do happen, we are capable of dealing with them when they do.

I always giggle a little when I see backpackers carrying a 15 pound hatchet for a single night in the woods. There
really is no need for chopping down trees when you're camping. But the fear of needing it is real. It's a "survival
tool" and it's easy to imagine needing it in a survival situation... but the reality is that its much safer and
practical to walk out of the woods and get help if you're in a survival situation, than to chop down trees and build
a fort. A campfire can be fueled by twigs and branches, no need for a hatchet. Using a hatchet is also dangerous.

In design systems, it's easy to fall in the trap of planning for every possible scenario. Planning for flexible use is
important, but it's also important to remember that our users are capable of surviving without a "hatchet".
Would it be nice to have a design token to allow for override of every possible design feature of any component?
Maybe, but ask yourself first:

1. is it truly _likely_ that users will need a feature
2. is there an easier "hike out" option

Especially when working on a design system that operates at scale (our systems at Nike serve _hundreds_ of teams),
packing the design system for every possible scenario is a recipe for a very heavy pack and strenuous future hikes.

## 3. **Every Ounce Counts, So Count Every Ounce**

Ultra-light backpackers are notorious for cutting the handles off their toothbrushes to save a few grams. Extra
straps, cut it off. Extra pockets, cut them off. Fluffy bobble on your hat, not on this trip.

And a magic thing happens; those small savings quickly add up to _big_ savings.

This process starts with a spreadsheet and scale. Every item is weighed and recorded. Every item is scrutinized for
weight and necessity. Time is taken to consider the details.

In software engineering, we can apply the same principle. Every feature, every component, every line of code, every
dependency, every test, every documentation page... they all have a weight. And that weight is not just in the
initial implementation, but in the maintenance, support, and future changes.

Taking the time to address small sources of technical debt (unneeded abstractions, poorly named variables, unclear
documentation) can lead to big savings in the long run. When reviewing code, take the time to consider the details
and ask yourself "is there a way to get this feature with less weight?".

## 4. **Always Be Learning and Adapting**

Ultra-light backpackers are always re-evaluating their gear. There hasn't been a trip yet where I haven't come back
with a list of things I could have left behind, changed, or brought. Every experience is a lesson and an opportunity.
And every trip is to implement what I learned on the last trip.

In software engineering, we should be doing the same. For design systems, this means getting consistent feedback from
users and spending the time to process that feedback. It also means taking the time to revisit decisions and past
technical solutions.

A mentor of mine once told me "you should always be able to improve on your past work, because you learn new things
in the process of doing the work". Good software engineering depends on mindfully learning lessons from the past and
a willingness to adapt, change, experiment, and continuously improve.

## 5. **The Less _How_ You Carry, the More _What_ You Enjoy**

When you're not distracted by the weight on your back, you have more opportunity to truly enjoy the experience.

Just about every ultra-light book is about how to carry less weight. But that's not what motivates ultra-light
backpackers. It's getting to be closer to nature, to be more present, to be more connected to the experience.

As design system practitioners, it's easy for us to get caught up in making sure we're packing all the right "gear"
into the system. But the real goal is to make it easier for our users to do their work, and to empower them to build
amazing experiences. The most valuable and enjoyable parts of my job are when I get to work directly with users,
helping them implement, extend, and customize the design system, and seeing the amazing things they
build.

## In Practice

Okay... so what does this look like in practice? Here are a few quick tips for taking an ultra-light approach to
design systems:

1. Start with MVP features and components. Add things as they are needed, not as they are imagined.
2. Design for the 80% use case. Allow users to "hike out" for the 20% use case. This means making it easy to extend
   and customize the design system code.
3. Avoid over-engineering. Keep things simple and straightforward. Don't add complexity until it's needed.
4. Take the time to address small sources of technical debt. It's easy to let these things slide, but they add up
   over time.
5. Don't create abstractions for the sake of abstractions. Every abstraction has a weight, and that weight is in
   maintenance, support, and future changes.
6. Don't create abstractions of native features, extend upon them.
7. Build component APIs that are intuitive to use. Rely on common patterns and conventions. Don't introduce
   unnecessary complexity and abstractions in component APIs.
8. Centralize, automate, and simplify documentation. Document concisely and clearly, and avoid low value documentation
   that is likely to become outdated.
9. Avoid the "fear of missing out" on features. It's okay to say "no" to a feature. It's better to say "no" than to
   add something that will weigh you down in the future.

## Closing Thoughts

Design systems work is super enjoyable and rewarding, and I love that I do it. I've also seen the weight of a design system slow down teams, kill moral, and make the work less enjoyable.

Taking an ultra-light approach to design systems can help us move faster, be more adaptable, and more enjoyable to work with. It's a mindset shift, and it's not always easy. But the results are worth it.