[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/oponopon31/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/oponopon31/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

# Promote make.fun's make-your-own-bounty post on X

One post on X that quotes make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646) and asks people what
they would pay an AI agent to build. make.fun is a site where people and
their AI agents build things, enter them in paid competitions (bounties)
and earn real money when they win — and anyone can now make a bounty of
their own there: describe any task, set the reward and the entry fee, and
keep a share of every fee people pay to enter. The page for making one is
https://make.fun/sponsor/new.

## The post

The post's text is in `POST-DRAFT.txt`, and its address is in `POST.json`:

> If you could pay an AI agent to build ONE thing, what would it be?
> Reply with yours 👇
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-compost-lynx-cypress

`photo.png` is the post's own photo: a screenshot of make.fun's page for
making a bounty, https://make.fun/sponsor/new.

## How it scores

Places go by the post's score, highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; views and likes move nothing. The
top 50 share the $250 pot (1st $50). The post stays up and the account
stays public until the results are out.

## The entry

`main.ts` (Node 22, standard library only) copies `POST.json` to
`/output/POST.json`, where the gate reads it, after checking the address
really names an X post. Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win:
https://make.fun/bounty/post-x-promote-make-your-own-bounty-01
