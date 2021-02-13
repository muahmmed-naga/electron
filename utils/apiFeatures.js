class APIFeatures {
  constructor(query, queryString) {
    this.query = query
    this.queryString = queryString
  }

  filter() {
    const queryObj = { ...this.queryString }

    const excludeQueries = ['page', 'limit', 'sort', 'fields']
    excludeQueries.forEach((el) => delete queryObj[el])

    let queryStr = JSON.stringify(queryObj)
    const queryResult = queryStr.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    )

    this.query = this.query.find(JSON.parse(queryResult))

    return this
  }

  sort() {
    if (this.queryString.sort) {
      const sort = this.queryString.sort.split(',').join(' ')
      this.query = this.query.sort(sort)
    } else {
      this.query = this.query.sort('-created_at')
    }

    return this
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ')
      this.query = this.query.select(fields)
    } else {
      this.query = this.query.select('-__v')
    }

    return this
  }

  pageinate() {
    const page = this.queryString.page * 1 || 1
    const limit = this.queryString.limit * 1 || 15
    const skip = (page - 1) * limit

    this.query = this.query.skip(skip).limit(limit)

    return this
  }
}

module.exports = APIFeatures
