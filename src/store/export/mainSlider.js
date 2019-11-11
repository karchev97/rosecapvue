export default {
  state: {
    slides: [
      {
        title: "Full winter kit",
        sub_title: "Какой-то дополнительный текст",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        price: "10.000",
        link_to: "#"
      },
      {
        title: "Another title for example",
        sub_title: "Какой-то дополнительный текст 2",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit 2",
        price: "130.000",
        link_to: "#"
      },
      {
        title: "Revolution product",
        sub_title: "Подзаголовок продаваемого товара",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit 2",
        price: "99.000",
        link_to: "#"
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    MAIN_SLIDER: state => {
      return state.slides
    }
  }
}
