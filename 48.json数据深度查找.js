let treeData = [
  {
    id: 1,
    aname: "邓稼先",
    value: "核物理学家",
    age: 1924,
    children: [
      {
        id: 11,
        aname: "袁隆平",
        value: "杂交水稻育种专家",
        age: 1930,
        children: [],
      },
    ],
  },
  {
    id: 2,
    aname: "钱学森",
    value: "空气动力学家",
    age: 1991,
    children: [
      {
        id: 22,
        aname: "李四光",
        value: "地质学家",
        age: 1889,
        children: [
          {
            id: 222,
            aname: "于敏",
            value: "核物理学家",
            age: 1926,
            children: [
              {
                id: 555,
                aname: "于敏",
                value: "核物理学家",
                age: 1926,
                children: [],
              },
              {
                id: 666,
                aname: "于敏",
                value: "核物理学家",
                age: 1926,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    aname: "华罗庚",
    value: "数学家",
    age: 1910,
    children: [
      {
        id: 33,
        aname: "钱三强",
        value: "核物理学家",
        age: 1913,
        children: [],
      },
    ],
  },
];

// 通过id深度查找对应的数据
const getItemById = function (data, id) {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    if (item.id === id) return item;
    if (item.children && item.children.length > 0) {
      const result = getItemById(item.children, id);
      if (result) return result;
    }
  }

  return null;
};

console.log("2ddddddddddd222");
console.log(getItemById(treeData, 555));
