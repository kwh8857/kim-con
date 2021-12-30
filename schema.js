const schema = {
  notice: {
    __id: {
      config: {
        isPin: Boolean,
      },
      title: String,
      category: String,
      template: [],
      timestamp: Number,
      view: Number,
    },
  },
  project: {
    //notice와 동일
  },
  question: {
    __id: {
      title: String,
      category: String,
      name: String,
      info: {
        companyname: String,
        category: String,
        tel: String,
        email: String,
        number: Number,
        contury: String,
        history: String,
        policy: Boolean,
      },
      template: [],
      timestamp: Number,
    },
  },
};
