export function twoSum(nums: number[], target: number): number[] {
    return l(target, nums, nums, nums.slice(1));
}

function l(target, original_array: number[], array_one: number[], array_two: number[]): number[] {
    if ((array_one[0] + array_two[0]) == target) 
        return [ 
            original_array.length - array_one.length, 
            original_array.length - array_two.length
        ];

    if (array_one.length == 1) return [];

    if (array_two.length == 1) {
        const new_array = array_one.slice(1);

        console.log(`new_array: ${new_array}`)
        
        return l(
            target, 
            original_array,
            new_array,
            original_array
        );
    }

    return l(target, original_array, array_one, array_two.slice(1));
}
