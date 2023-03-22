export class OrderProcessorRepo {
  /** request order BEFORE_APPROVE */
  static async orderVendorRequest() {}
  /** approve order BEFORE_PAYMENT */
  static async orderVendorApprove() {}
  /** reject order REJECTED */
  static async orderVendorReject() {}
}
