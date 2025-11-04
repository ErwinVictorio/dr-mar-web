
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, RefreshCcw } from "lucide-react"

export default function UnderMaintenance() {
  const handleReload = () => window.location.reload()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-4">
      <Card className="w-full max-w-md text-center shadow-lg rounded-2xl border border-gray-200 bg-white/90 backdrop-blur">
        <CardContent className="p-8 flex flex-col items-center space-y-6">
          <div className="bg-[#009CFF] p-4 rounded-full">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-2xl font-semibold text-gray-800">
            We’re Under Maintenance
          </h1>

          <p className="text-gray-600">
            Our website is temporarily down for scheduled maintenance.
            We’ll be back shortly. Thank you for your patience!
          </p>

          <Button onClick={handleReload} className="flex items-center space-x-2">
            <RefreshCcw className="w-4 h-4" />
            <span>Try Again</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
