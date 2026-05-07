# Linear Search Algorithm

A simple and intuitive search algorithm that checks every element in a list sequentially until a match is found or the end of the list is reached.

---

## How It Works

The **Linear Search** (AKA **_Sequential Search_**) follows a straight forward logic:

1.  **Start** at the first element (index 0) of the array.
2.  **Compare** the current element with the `target` value.
3.  **Match Found:** If the element equals the target, return the current **index**.
4.  **No Match:** If the element does not match, move to the next index and repeat step 2.
5.  **End of Array:** If the loop finishes without finding a match, return **-1**.

### Performance

| Metric               | Complexity | Description                                       |
| :------------------- | :--------- | :------------------------------------------------ |
| **Best Case**        | $O(1)$     | The target is at the very beginning of the array. |
| **Worst Case**       | $O(n)$     | The target is at the end or not present.          |
| **Average Case**     | $O(n)$     | On average, half the elements are checked.        |
| **Space Complexity** | $O(1)$     | No extra memory relative to input size.           |

---

## Implementation

```javascript
/**
 * Searches for a target value within an array.
 * @param {Array} array - The list of elements to search through.
 * @param {*} target - The value to look for.
 * @returns {number} - The index of the target, or -1 if not found.
 */
function search(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}
```

## Usage Example

```javascript
const data = [19, 8, 88, 10, 2, 45, 33];
const targetValue = 10;

const result = search(data, targetValue);

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
