import { BadgeCheckIcon } from "@/assets/icons/badge-check"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { SecurityIcon } from "@/assets/icons/security-icon"

export const LeftSection = () => {
    return (
        <div className="w-1/2 flex flex-col justify-center content-center px-10 gap-7">
          <Badge variant="secondary" className="">Precision Concierge service</Badge>

          <h1  className="text-6xl font-bold">Elevate Your Standard Of Service</h1>
          <p  className="text-lg font-normal text-gray-600">Join Servidor Local to experience a curated ecosystem connecting discerning clients with elite professional and premier companies</p>
          <div className="flex justify-evenly gap-5 w-full">
            <Card className="px-3 py-7">
                <CardContent>
                    <CardHeader>
                      <BadgeCheckIcon/>
                    </CardHeader>
                    <CardTitle className="font-semibold">Vetted Network</CardTitle>
                    <CardDescription>Exclusive access to top-tier providers and clients</CardDescription>
                </CardContent>
            </Card>
            <Card className="px-3 py-7">
                <CardContent>
                  <CardHeader>
                      <SecurityIcon/>
                    </CardHeader>
                    <CardTitle className="font-semibold">Secure Platform</CardTitle>
                    <CardDescription>Entrepise-grade security for all your transactions and data</CardDescription>
                </CardContent>
            </Card>

          </div>
        </div>
    )
}