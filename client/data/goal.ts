export interface Goal {
    name: string
    description: string
    type: string;
    cover: string
  }

  export const currentGoals: Goal[] = [
    {
      name: "SubGoal1",
      type: "relationship",
      description: "Sample Description",
      cover:
        "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    },
    {
      name: "SubGoal2",
      description: "Sample Description",
      type: "relationship",
      cover:
        "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
    },
    {
      name: "SubGoal3",
      description: "Sample Description",
      type: "financial",
      cover:
        "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
    },
    {
      name: "SubGoal4",
      description: "Sample Description",
      type: "financial",
      cover:
        "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
    },
    {
        name: "SubGoal5",
        description: "Sample Description",
        type: "health",
        cover:
          "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
      },
      {
        name: "SubGoal6",
        description: "Sample Description",
        type: "health",
        cover:
          "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
      },
  ]

//   export const futureGoals: Goal[] = [
//     {
//       name: "Sub Goal 1",
//       description: "Sample Description",
//       cover:
//         "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
//     },
//     {
//       name: "Sub Goal 2",
//       description: "Sample Description",
//       cover:
//         "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
//     },
//     {
//       name: "Sub Goal 3",
//       description: "Sample Description",
//       cover:
//         "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
//     },
//     {
//       name: "Sub Goal 4",
//       description: "Sample Description",
//       cover:
//         "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
//     },
//     {
//       name: "Sub Goal 5",
//       description: "Sample Description",
//       cover:
//         "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
//     },
//     {
//       name: "Sub Goal 6",
//       description: "Sample Description",
//       cover:
//         "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
//     },
//   ]
