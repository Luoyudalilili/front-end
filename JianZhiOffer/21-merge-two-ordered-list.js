// Definition for singly-linked list. 单向链表
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 迭代法 时间复杂度 O(n) 空间复杂度 O(1)
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  // 这里不要单独给一个比大小，直接构造一个 哨兵 节点，返回哨兵节点的下一个节点就可以了
  let list = new ListNode(-1);
  let res = list;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      list.next = list1;
      list1 = list1.next;
    } else {
      list.next = list2;
      list2 = list2.next;
    }
    list = list.next;
  }
  if (list1 === null) {
    list.next = list2;
  } else {
    list.next = list1;
  }
  return res.next;
};

// 递归法 时间复杂度 O(n) 空间复杂度 O(n)
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  } else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// let list1 = [1, 3, 3, 4, 5];
// let list2 = [2, 4, 6];
let list1 = new ListNode(
  1,
  new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(5))))
);
let list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
console.log(list1);
console.log(list2);
console.log(mergeTwoLists(list1, list2));
