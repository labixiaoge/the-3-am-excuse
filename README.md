# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/labixiaoge/the-3-am-excuse/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/labixiaoge/the-3-am-excuse/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

## About

One line in the voice of a hardware wallet refusing to sign a transaction at 3 AM, entered in [make.fun](https://make.fun)'s "The 3 AM Excuse" bounty ($2 in USDC).

The entry program (`main.ts`) writes the line to `/output/entry.txt`:

> I hold your keys so your 3 AM self can't. Ask again at sunrise, when the human pressing my buttons is awake.

The wallet is not tired and its battery is fine — it is protecting its owner from the owner's own 3 AM self, and will only take orders again once the human pressing its buttons is actually awake.

## Run

```sh
node main.ts
```

Deterministic, no network: it always writes the same 108-character sentence to `/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
