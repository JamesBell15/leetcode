const trampoline_function = (func) => (...rest_arguments) => {
    let result = func(...rest_arguments);
    while (typeof result === 'function') {
        result = result();
    }
    return result;
};

type Thunk = () => number[] | Thunk;

function l(target, original_array: number[], i: number, j: number): Thunk {
    // Skip double counting the same index
    if (i == j) {
        return () => l(target, original_array, i, ++j);
    };

    if ((original_array[i] + original_array[j]) == target) 
        return () => [ 
            i, 
            j
        ];

    if (i == original_array.length) return () => [];

    if (j == original_array.length) {
        ++i;

        return () => l(
            target, 
            original_array,
            i,
            i + 1
        );
    }

    return () => l(target, original_array, i, ++j);
};

export function twoSum(nums: number[], target: number) : number[] {
    const lambda = trampoline_function(l);

    return lambda(target, nums, 0, 1);
}
