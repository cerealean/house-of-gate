export const numberRange =
    (start: number, stop: number, step = 1): number[] =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (_, index) => start + index * step
        );