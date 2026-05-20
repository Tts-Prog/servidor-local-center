import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheckIcon } from "@/public/assets/icons/badge-check";
import { SecurityIcon } from "@/public/assets/icons/security-icon";




export const LeftSection = () => {  
    return (
        <div className="w-1/2 flex flex-col justify-center px-10 gap-4">
<Badge variant="secondary">Precisio Concierge service</Badge>

<h1 className="text-6xl font-bold">Elevante your Stordart of Service</h1>

<p className="text-lg-left front-norma text-gray-600">
    Join Servidor Local to experence a curited ecosystem connecting decirning clients with
elite proficional and premier companies.
</p>

<div className="flex justify-evenly gap-5 w-full">
    <Card className="px-3 py-7"> 
        
            <CardHeader>
                <BadgeCheckIcon/>
            </CardHeader>
            <CardContent>
        <CardTitle>Vetted Neetwork</CardTitle>
        <CardDescription>
            Exclosive access to top-tier providers and clients
        </CardDescription>
        </CardContent>
    </Card>
    <Card className="px-3 py-7"> 
            <CardHeader>
                <SecurityIcon/>
            </CardHeader> 
            <CardContent>
        <CardTitle>
            Security Platform
        </CardTitle>
        <CardDescription>Personaliszad  security for all your transations and data.</CardDescription>
</CardContent>
        </Card>
</div>
</div>
    )
}