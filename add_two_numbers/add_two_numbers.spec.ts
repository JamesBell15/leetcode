import { addTwoNumbers, ListNode } from "./add_two_numbers";

test("example 1", () => {
    const l1 = new ListNode(
        2,
        new ListNode(
            4,
            new ListNode(
                3,
                null
            )
        )
    );
    const l2 = new ListNode(
        5,
        new ListNode(
            6,
            new ListNode(
                4,
                null
            )
        )
    );

    const answer = new ListNode(
        7,
        new ListNode(
            0,
            new ListNode(
                8,
                null
            )
        )
    );
        
    expect(addTwoNumbers(l1, l2)).toEqual(answer);
});

test("example 2", () => {
    const l1 = new ListNode(
        0,
        null
    );
    const l2 = new ListNode(
        0,
        null
    );

    const answer = new ListNode(
        0,
        null
    );
        
    expect(addTwoNumbers(l1, l2)).toEqual(answer);
});

test("example 3", () => {
    const l1 = new ListNode(
        9,
    new ListNode(
        9,
    new ListNode(
        9,
    new ListNode(
        9,
    new ListNode(
        9,
    new ListNode(
        9,
    new ListNode(
        9,
        null
    )))))));
    const l2 = new ListNode(
        9,
    new ListNode(
        9,
    new ListNode(
        9,
    new ListNode(
        9,
        null
    ))));

    const answer = new ListNode(
        8,
    new ListNode(
        9,
    new ListNode(
        9,
    new ListNode(
        9,
    new ListNode(
        0,
    new ListNode(
        0,
    new ListNode(
        0,
    new ListNode(
        1,
        null
    ))))))));
        
    expect(addTwoNumbers(l1, l2)).toEqual(answer);
});
