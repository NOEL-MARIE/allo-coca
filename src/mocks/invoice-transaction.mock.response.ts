
export const mockInvoiceTransactionsResponse: {
  code: number;
  msg: string;
  data: {
    total: number;
    has_next: boolean;
    items: any[];
  };
} = {
  code: 200,
  msg: "Success",
  data: {
    total: 5,
    has_next: false,
    items: [
      {
        id: "inv_001",
        service: "CIE" as const,
        invoiceNumber: "CIE-2025-001234",
        amount: 45000,
        currency: "XOF",
        dueDate: "2025-08-15T00:00:00.000Z",
        status: "PENDING",
        paymentDate: undefined,
      },
      {
        id: "inv_002",
        service: "SODECI" as const,
        invoiceNumber: "SOD-2025-005678",
        amount: 28500,
        currency: "XOF",
        dueDate: "2025-08-20T00:00:00.000Z",
        status: "PAID",
        paymentDate: "2025-08-01T14:30:00.000Z",
      },
      {
        id: "inv_003",
        service: "Canal+" as const,
        invoiceNumber: "CPL-2025-009876",
        amount: 15000,
        currency: "XOF",
        dueDate: "2025-07-30T00:00:00.000Z",
        status: "OVERDUE",
        paymentDate: undefined,
      },
      {
        id: "inv_004",
        service: "CIE" as const,
        invoiceNumber: "CIE-2025-002468",
        amount: 62000,
        currency: "XOF",
        dueDate: "2025-08-25T00:00:00.000Z",
        status: "PROCESSING",
        paymentDate: undefined,
      },
      {
        id: "inv_005",
        service: "SODECI" as const,
        invoiceNumber: "SOD-2025-007890",
        amount: 31200,
        currency: "XOF",
        dueDate: "2025-08-10T00:00:00.000Z",
        status: "FAILED",
        paymentDate: undefined,
      },
    ] as any[],
  },
};
