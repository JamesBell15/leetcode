export function lengthOfLongestSubstring(s: string): number {
    return l(s, '', 0);
};

function l(s: string, substring: string, count: number): number {
    if (s.length == 0) return count;

    const first_char = s[0];
  
    if (substring.includes(first_char)) return l(s.slice(1), '', count);

    const new_substring = substring.concat(first_char);

    const new_count = new_substring.length > count ? new_substring.length : count;

    return l(s.slice(1), new_substring, new_count);
};