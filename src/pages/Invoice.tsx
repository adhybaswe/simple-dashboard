import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function Invoice() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 pt-4">
      <Card className="w-full mx-auto">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <CardTitle className="text-primary text-2xl">Invoice</CardTitle>
            <div className="text-sm text-muted-foreground">INV-2025-001</div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Info pengirim & penerima */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
            <div>
              <div className="font-semibold text-foreground">From:</div>
              <div>Simple Dashboard Inc.</div>
              <div>Jl. Merdeka No. 123</div>
              <div>Jakarta, Indonesia</div>
              <div>support@simpledashboard.com</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Bill To:</div>
              <div>John Doe</div>
              <div>Jl. Sudirman No. 456</div>
              <div>Bandung, Indonesia</div>
              <div>john.doe@email.com</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Invoice Date:</div>
              <div>2025-09-01</div>
              <div className="font-semibold text-foreground mt-2">Due Date:</div>
              <div>2025-09-15</div>
              <div className="font-semibold text-foreground mt-2">Status:</div>
              <span className="text-emerald-600 font-semibold">Paid</span>
            </div>
          </div>

          {/* Tabel item */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-left font-semibold">Item</th>
                  <th className="px-4 py-2 text-right font-semibold">Qty</th>
                  <th className="px-4 py-2 text-right font-semibold">Unit Price</th>
                  <th className="px-4 py-2 text-right font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">UI Design</td>
                  <td className="px-4 py-2 text-right">1</td>
                  <td className="px-4 py-2 text-right">$800.00</td>
                  <td className="px-4 py-2 text-right">$800.00</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Development</td>
                  <td className="px-4 py-2 text-right">1</td>
                  <td className="px-4 py-2 text-right">$350.00</td>
                  <td className="px-4 py-2 text-right">$350.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Hosting (1 year)</td>
                  <td className="px-4 py-2 text-right">1</td>
                  <td className="px-4 py-2 text-right">$50.00</td>
                  <td className="px-4 py-2 text-right">$50.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Ringkasan */}
          <div className="flex flex-col items-end gap-2 mb-4">
            <div className="flex gap-8">
              <div className="text-muted-foreground">Subtotal</div>
              <div className="text-right font-medium">$1,200.00</div>
            </div>
            <div className="flex gap-8">
              <div className="text-muted-foreground">Tax (0%)</div>
              <div className="text-right font-medium">$0.00</div>
            </div>
            <div className="flex gap-8 text-lg font-bold">
              <div>Total</div>
              <div className="text-primary">$1,200.00</div>
            </div>
          </div>

          {/* Catatan */}
          <div className="mt-6 text-xs text-muted-foreground">
            <div className="font-semibold mb-1">Notes:</div>
            <div>Thank you for your business. Please contact us if you have any questions about this invoice.</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
