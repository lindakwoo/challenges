/*
    Daily Challenge 2/18/2020

    Write a function which accepts a two dimensional array of 1s and 0s.
    Within the array is a single rectangle of 0s. Your program should find
    the rectangle and output the x and y coordinate of the first zero and
    the height and width of the rectangle as an object.

    Example 1:
      Input:
        [
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 0, 0, 0, 1, 1],
          [1, 1, 1, 0, 0, 0, 1, 1]
          [1, 1, 1, 1, 1, 1, 1, 1]
        ]

      Output: {x: 3, y: 1, height: 2, width: 3 }

    Example 2:
      Input:
        [
          [0]
        ]
      Output: { x: 0, y: 0, height: 1, width: 1 }

    Considerations:
      - Assume a valid input array
*/
