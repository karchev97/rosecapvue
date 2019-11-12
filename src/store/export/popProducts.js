export default {
  state: {
    products: [
      {
        id: 0,
        title: "PRODUCT NAME",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, saepe.",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, optio commodi recusandae obcaecati nulla fugiat quis, maiores quia fugit animi molestias, unde consequatur deserunt quisquam minima eligendi expedita reiciendis sed tenetur doloremque assumenda. Quas nihil omnis tenetur recusandae, minus culpa?",
        size: ['s', 'm', 'l', 'xl'],
        imgs: ['Product1.png', 'Product2.png', 'Product3.png'],
        price: 10000
      },
      {
        id: 1,
        title: "PRODUCT NAME 2",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, saepe.",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, optio commodi recusandae obcaecati nulla fugiat quis, maiores quia fugit animi molestias, unde consequatur deserunt quisquam minima eligendi expedita reiciendis sed tenetur doloremque assumenda. Quas nihil omnis tenetur recusandae, minus culpa?",
        size: ['s', 'm', 'l', 'xl'],
        imgs: ['Product3.png', 'Product2.png', 'Product3.png'],
        price: 12000
      },
      {
        id: 2,
        title: "PRODUCT NAME 3",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, saepe.",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, optio commodi recusandae obcaecati nulla fugiat quis, maiores quia fugit animi molestias, unde consequatur deserunt quisquam minima eligendi expedita reiciendis sed tenetur doloremque assumenda. Quas nihil omnis tenetur recusandae, minus culpa?",
        size: ['s', 'm', 'xl'],
        imgs: ['Product1.png', 'Product2.png', 'Product3.png', 'Product3.png'],
        price: 1000
      },
      {
        id: 3,
        title: "PRODUCT NAME 4",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, saepe.",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, optio commodi recusandae obcaecati nulla fugiat quis, maiores quia fugit animi molestias, unde consequatur deserunt quisquam minima eligendi expedita reiciendis sed tenetur doloremque assumenda. Quas nihil omnis tenetur recusandae, minus culpa?",
        size: [ 'l', 'xl'],
        imgs: ['Product2.png', 'Product2.png', 'Product3.png'],
        price: 4000
      },
      {
        id: 4,
        title: "PRODUCT NAME 5",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, saepe.",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, optio commodi recusandae obcaecati nulla fugiat quis, maiores quia fugit animi molestias, unde consequatur deserunt quisquam minima eligendi expedita reiciendis sed tenetur doloremque assumenda. Quas nihil omnis tenetur recusandae, minus culpa?",
        size: ['s', 'm', 'l', 'xl', 'xxl'],
        imgs: ['Product1.png', 'Product2.png', 'Product3.png'],
        price: 2900
      },
      {
        id: 5,
        title: "PRODUCT NAME 6",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, saepe.",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, optio commodi recusandae obcaecati nulla fugiat quis, maiores quia fugit animi molestias, unde consequatur deserunt quisquam minima eligendi expedita reiciendis sed tenetur doloremque assumenda. Quas nihil omnis tenetur recusandae, minus culpa?",
        size: ['s', 'm', 'l', 'xl', 'xxl'],
        imgs: ['Product1.png', 'Product2.png', 'Product3.png'],
        price: 2900
      },
      {
        id: 6,
        title: "PRODUCT NAME 7",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, saepe.",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, optio commodi recusandae obcaecati nulla fugiat quis, maiores quia fugit animi molestias, unde consequatur deserunt quisquam minima eligendi expedita reiciendis sed tenetur doloremque assumenda. Quas nihil omnis tenetur recusandae, minus culpa?",
        size: ['s', 'm', 'l', 'xl', 'xxl'],
        imgs: ['Product1.png', 'Product2.png', 'Product3.png'],
        price: 2900
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    PRODUCTS: state => {
      return state.products
    }
  }
}
