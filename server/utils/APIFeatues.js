class APIFeatures {
  constructor(model, queryString) {
    this.model = model;
    this.queryString = queryString;
  }

  filter() {
    const reqQryObj = { ...this.queryString };
    const excludedFields = ["fields", "sort", "limit", "page"];
    excludedFields.forEach(el => delete reqQryObj[el]);

    let queryStr = JSON.stringify(reqQryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    this.model = this.model.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.model = this.model.sort(sortBy);
    } else {
      this.model = this.model.sort("-createdAt");
    }

    return this;
  }

  fields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.model = this.model.select(fields);
    } else {
      this.model = this.model.select("-__v");
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = (page - 1) * limit;

    this.model = this.model.skip(skip).limit(limit);

    return this;
  }
}

export default APIFeatures;
