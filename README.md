# process_global_bench

This repository contains code to measure performance difference between the following two commits:

1. https://github.com/denoland/deno/pull/27562/commits/282020a1d42d7da2afd1b1bc39aa1fe975e70a98
2. https://github.com/denoland/deno/commit/b7fb5a5547dcc83a552d595895484c2b2dba2b95

1 and 2 differ in whether `process` is made available in `deno_node` crate (1) or not (2).

# Results

1, where `process` is not enabled in `deno_node`:

```
❯ hyperfine --warmup 3 'deno_20240107_main_b7fb5a5 run -A main.ts'
Benchmark 1: deno_20240107_main_b7fb5a5 run -A main.ts
  Time (mean ± σ):     477.8 ms ±   4.2 ms    [User: 468.1 ms, System: 8.4 ms]
  Range (min … max):   471.2 ms … 484.7 ms    10 runs
```

2, where `process` is enabled in `deno_node`:

```
❯ hyperfine --warmup 3 'deno_20240107_process_in_node run -A main.ts'
Benchmark 1: deno_20240107_process_in_node run -A main.ts
  Time (mean ± σ):     477.8 ms ±  11.9 ms    [User: 470.5 ms, System: 8.3 ms]
  Range (min … max):   462.8 ms … 501.7 ms    10 runs
```
