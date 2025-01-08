# process_global_bench

This repository contains code to measure performance difference between the following two commits:

1. https://github.com/denoland/deno/commit/b7fb5a5547dcc83a552d595895484c2b2dba2b95
2. https://github.com/denoland/deno/pull/27562/commits/282020a1d42d7da2afd1b1bc39aa1fe975e70a98

## Results

### ESM with (1) where `process` is not enabled in `deno_node`

```
❯ hyperfine --warmup 3 'deno_20240107_main_b7fb5a5 run -A main.ts'
Benchmark 1: deno_20240107_main_b7fb5a5 run -A main.ts
  Time (mean ± σ):     465.0 ms ±  12.7 ms    [User: 454.9 ms, System: 9.6 ms]
  Range (min … max):   447.8 ms … 486.7 ms    10 runs
```

### ESM with (2) where `process` is enabled in `deno_node`

```
❯ hyperfine --warmup 3 'deno_20240107_process_in_node run -A main.ts'
Benchmark 1: deno_20240107_process_in_node run -A main.ts
  Time (mean ± σ):     467.1 ms ±   3.5 ms    [User: 459.3 ms, System: 8.9 ms]
  Range (min … max):   461.4 ms … 472.4 ms    10 runs
```

### CJS with (1) where `process` is not enabled in `deno_node`

```
❯ hyperfine --warmup 3 'deno_20240107_main_b7fb5a5 run -A main.ts'
Benchmark 1: deno_20240107_main_b7fb5a5 run -A main.ts
  Time (mean ± σ):     469.9 ms ±  13.8 ms    [User: 460.8 ms, System: 9.0 ms]
  Range (min … max):   456.9 ms … 499.8 ms    10 runs
```

### CJS with (2) where `process` is enabled in `deno_node`

```
❯ hyperfine --warmup 3 'deno_20240107_process_in_node run -A main.ts'
Benchmark 1: deno_20240107_process_in_node run -A main.ts
  Time (mean ± σ):     464.9 ms ±   8.6 ms    [User: 456.5 ms, System: 8.7 ms]
  Range (min … max):   458.6 ms … 488.0 ms    10 runs
```
