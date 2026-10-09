import { lengthOfLongestSubstring } from "./longest_substring_without_repeating_characters";

test("example 1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
});

test("example 2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
});

test("example 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
});
