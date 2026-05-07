# Binary Search Algorithm

A highly efficient search algorithm that finds the position of a target value within a **sorted array** by repeatedly dividing the search interval in half.

---

## How It Works

The **Binary Search** uses a "divide and conquer" strategy to locate an element in logarithmic time:

1. **Initialize** two pointers: l (left) at the start of the array and r (right) at the end.
2. **Calculate** the middle index m of the current range.
3. **Compare** the middle element with the `target`:
   - **_Match Found_**: If array[m] equals the target, return the middle **index m**.
   - **_Search Left_**: If the target is smaller than array[m], narrow the search to the left half by updating r.
   - **_Search Right_**: If the target is larger than array[m], narrow the search to the right half by updating l.
4. **Repeat** until the target is found or the range becomes empty (l > r), at which point return **-1**.

### Performance

| Metric               | Complexity  | Description                                                        |
| :------------------- | :---------- | :----------------------------------------------------------------- |
| **Best Case**        | $O(1)$      | The target is exactly at the middle of the array on the first try. |
| **Worst Case**       | $O(\log n)$ | The search space is halved in every iteration.                     |
| **Average Case**     | $O(\log n)$ | Typical performance for random target placement                    |
| **Space Complexity** | $O(1)$      | It uses a constant amount of extra space.                          |

---

## Implementation

```javascript
/**
 * Searches for a target value within an array.
 * @param {Array} array - The sorted list of elements to search through.
 * @param {*} target - The value to look for.
 * @returns {number} - The index of the target, or -1 if not found.
 */
function search(array, target) {
  let l = 0;
  let r = array.length;

  while (l <= r) {
    let m = Math.round((l + r) / 2);

    if (array[m] === target) return m;
    else if (target < array[m]) r = m - 1;
    else if (target > array[m]) l = m + 1;
  }

  return -1;
}
```

## Usage Example

```javascript
const sortedData = [2, 8, 10, 19, 33, 45];
const targetValue = 19;

const result = search(sortedData, targetValue);

if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log("Element not found in the array.");
}
```

### Output

```plaintext
Element found at index: 3
```

**Important Note**: Binary Search **requires a sorted array** to run correctly.
