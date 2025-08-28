import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Signal,
  Activity,
  Calendar,
  Eye,
  EyeOff
} from "lucide-react";

// Mock data
const mockMetrics = {
  totalRevenue: 12450,
  activeUsers: 47,
  totalSessions: 312,
  averageSessionTime: "2.3 hours",
  networkUptime: "99.8%",
  dailyRevenue: [
    { day: "Mon", revenue: 1850 },
    { day: "Tue", revenue: 2100 },
    { day: "Wed", revenue: 1750 },
    { day: "Thu", revenue: 2300 },
    { day: "Fri", revenue: 2800 },
    { day: "Sat", revenue: 1950 },
    { day: "Sun", revenue: 1650 },
  ],
  popularPackages: [
    { package: "2 Hours", sales: 89, revenue: 1335 },
    { package: "1 Hour", sales: 67, revenue: 670 },
    { package: "24 Hours", sales: 34, revenue: 2040 },
    { package: "6 Hours", sales: 28, revenue: 980 },
  ],
  recentTransactions: [
    { id: "TXN001", phone: "0712345678", package: "2 Hours", amount: 15, time: "10:30 AM", status: "completed" },
    { id: "TXN002", phone: "0723456789", package: "1 Hour", amount: 10, time: "10:25 AM", status: "completed" },
    { id: "TXN003", phone: "0734567890", package: "24 Hours", amount: 60, time: "10:20 AM", status: "pending" },
    { id: "TXN004", phone: "0745678901", package: "6 Hours", amount: 35, time: "10:15 AM", status: "completed" },
    { id: "TXN005", phone: "0756789012", package: "2 Hours", amount: 15, time: "10:10 AM", status: "completed" },
  ],
  activeConnections: [
    { id: "CONN001", user: "User-7823", package: "2 Hours", timeLeft: "1h 23m", bandwidth: "8.5 MB/s", device: "Mobile" },
    { id: "CONN002", user: "User-3451", package: "24 Hours", timeLeft: "22h 15m", bandwidth: "12.3 MB/s", device: "Laptop" },
    { id: "CONN003", user: "User-9876", package: "6 Hours", timeLeft: "4h 45m", bandwidth: "6.7 MB/s", device: "Tablet" },
    { id: "CONN004", user: "User-5432", package: "1 Hour", timeLeft: "34m", bandwidth: "9.1 MB/s", device: "Mobile" },
  ]
};

const AdminPanel = () => {
  const [showSensitiveData, setShowSensitiveData] = useState(false);

  const maskPhone = (phone: string) => {
    if (showSensitiveData) return phone;
    return phone.slice(0, 3) + "****" + phone.slice(-3);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-wifi-gradient rounded-full p-3">
                <Activity className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">WiFi Admin Panel</h1>
                <p className="text-muted-foreground">Network monitoring & analytics</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowSensitiveData(!showSensitiveData)}
                className="flex items-center gap-2"
              >
                {showSensitiveData ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSensitiveData ? "Hide" : "Show"} Sensitive Data
              </Button>
              <Button variant="outline" asChild>
                <a href="/">Back to Portal</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-wifi">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">Ksh {mockMetrics.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="shadow-wifi">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{mockMetrics.activeUsers}</div>
              <p className="text-xs text-muted-foreground">Currently connected</p>
            </CardContent>
          </Card>

          <Card className="shadow-wifi">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <Wifi className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{mockMetrics.totalSessions}</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card className="shadow-wifi">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Network Uptime</CardTitle>
              <Signal className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{mockMetrics.networkUptime}</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="connections">Active Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Daily Revenue Chart */}
              <Card className="shadow-wifi">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Daily Revenue (This Week)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockMetrics.dailyRevenue.map((day) => (
                      <div key={day.day} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{day.day}</span>
                        <div className="flex items-center gap-2 flex-1 mx-4">
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-wifi-gradient h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(day.revenue / 3000) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-primary">Ksh {day.revenue}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Packages */}
              <Card className="shadow-wifi">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-primary" />
                    Popular Packages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockMetrics.popularPackages.map((pkg, index) => (
                      <div key={pkg.package} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">{index + 1}</span>
                          </div>
                          <div>
                            <p className="font-medium">{pkg.package}</p>
                            <p className="text-sm text-muted-foreground">{pkg.sales} sales</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">Ksh {pkg.revenue}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="shadow-wifi">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockMetrics.recentTransactions.map((txn) => (
                    <div key={txn.id} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{maskPhone(txn.phone)}</p>
                          <p className="text-sm text-muted-foreground">{txn.package} • {txn.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={txn.status === "completed" ? "default" : "secondary"}>
                          {txn.status}
                        </Badge>
                        <span className="font-bold text-primary">Ksh {txn.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connections" className="space-y-6">
            <Card className="shadow-wifi">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Active Connections ({mockMetrics.activeConnections.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockMetrics.activeConnections.map((conn) => (
                    <div key={conn.id} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                          <Wifi className="h-5 w-5 text-primary animate-pulse" />
                        </div>
                        <div>
                          <p className="font-medium">{conn.user}</p>
                          <p className="text-sm text-muted-foreground">{conn.device} • {conn.package}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{conn.timeLeft}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{conn.bandwidth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-wifi">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Weekly Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Average Session Time</span>
                    <span className="font-bold text-primary">{mockMetrics.averageSessionTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Peak Usage Hour</span>
                    <span className="font-bold text-primary">2:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most Popular Device</span>
                    <span className="font-bold text-primary">Mobile (68%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion Rate</span>
                    <span className="font-bold text-primary">78%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-wifi">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Network Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Average Bandwidth</span>
                    <span className="font-bold text-primary">9.2 MB/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Usage Today</span>
                    <span className="font-bold text-primary">847 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Access Points</span>
                    <span className="font-bold text-primary">4/4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network Latency</span>
                    <span className="font-bold text-primary">12ms</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPanel;