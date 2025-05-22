import { HashLink } from "react-router-hash-link"
import {
    BarChart3,
    PieChart,
    TrendingUp,
    DollarSign,
    FileText,
    Shield,
    ArrowLeft,
    CheckCircle2,
    ChevronRight,
    Calculator,
    LineChart,
    Landmark,
    Receipt,
    Coins,
} from "lucide-react"

export default function Accounting() {
    return (
        <div>
            {/* Hero Section - Icon-focused with no images */}
            <section id="accounting" className="relative overflow-hidden bg-primary text-black">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                        <BarChart3 className="w-64 h-64" />
                    </div>
                    <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                        <Calculator className="w-48 h-48" />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                        <DollarSign className="w-56 h-56" />
                    </div>
                </div>
                <div className="container relative py-20 md:py-28">
                    <HashLink href="/#services" className="inline-flex items-center text-white/90 hover:text-white mb-6">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Services
                    </HashLink>
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Accounting & Finance Services</h1>
                        <p className="text-xl opacity-90 mb-8">
                            Comprehensive financial management solutions to optimize your business operations and drive sustainable
                            growth.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                                <HashLink href="/contact">Get Started</HashLink>
                            </button>
                            <button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                <HashLink href="#services">Explore Services</HashLink>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
            </section>

            {/* Key Features - Icon Grid */}
            <section className="py-16 md:py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h3 className="mb-4">Our Expertise</h3>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Excellence for Your Business</h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                            Our accounting and finance services provide the expertise and solutions you need to optimize financial
                            operations, ensure compliance, and drive growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-primary/10 rounded-full p-6 mb-4">
                                <Calculator className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2">Financial Accuracy</h3>
                            <p className="text-muted-foreground text-sm">Precise financial reporting and analysis</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-primary/10 rounded-full p-6 mb-4">
                                <LineChart className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2">Strategic Planning</h3>
                            <p className="text-muted-foreground text-sm">Data-driven financial forecasting</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-primary/10 rounded-full p-6 mb-4">
                                <Landmark className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2">Tax Optimization</h3>
                            <p className="text-muted-foreground text-sm">Efficient tax planning and compliance</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-primary/10 rounded-full p-6 mb-4">
                                <Shield className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2">Risk Management</h3>
                            <p className="text-muted-foreground text-sm">Proactive financial risk mitigation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Icon divs */}
            <section id="services" className="py-16 md:py-24 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h3 className="mb-4">Our Services</h3>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Financial Solutions</h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                            We offer a wide range of accounting and finance services tailored to meet your specific business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service div 1 */}
                        <div className="overflow-hidden border-none shadow-md bg-gradient-to-br from-white to-primary/5">
                            <div className="p-0">
                                <div className="p-6 border-b">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-primary/10 rounded-full p-3">
                                            <BarChart3 className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Financial Reporting</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Accurate and timely financial reporting to provide insights into your business performance.
                                    </p>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Monthly financial statements</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Quarterly performance analysis</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Annual financial reports</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <HashLink
                                            href="/contact"
                                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                        >
                                            Learn more <ChevronRight className="ml-1 h-4 w-4" />
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service div 2 */}
                        <div className="overflow-hidden border-none shadow-md bg-gradient-to-br from-white to-primary/5">
                            <div className="p-0">
                                <div className="p-6 border-b">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-primary/10 rounded-full p-3">
                                            <PieChart className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Budgeting & Forecasting</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Strategic budgeting and forecasting to help you plan for the future and make informed decisions.
                                    </p>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Annual budget development</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Cash flow forecasting</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Financial scenario planning</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <HashLink
                                            href="/contact"
                                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                        >
                                            Learn more <ChevronRight className="ml-1 h-4 w-4" />
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service div 3 */}
                        <div className="overflow-hidden border-none shadow-md bg-gradient-to-br from-white to-primary/5">
                            <div className="p-0">
                                <div className="p-6 border-b">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-primary/10 rounded-full p-3">
                                            <TrendingUp className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Financial Analysis</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        In-depth financial analysis to identify trends, opportunities, and areas for improvement.
                                    </p>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Ratio analysis</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Profitability assessment</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Performance benchmarking</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <HashLink
                                            href="/contact"
                                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                        >
                                            Learn more <ChevronRight className="ml-1 h-4 w-4" />
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service div 4 */}
                        <div className="overflow-hidden border-none shadow-md bg-gradient-to-br from-white to-primary/5">
                            <div className="p-0">
                                <div className="p-6 border-b">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-primary/10 rounded-full p-3">
                                            <DollarSign className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Tax Planning</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Strategic tax planning to minimize your tax liability and ensure compliance with regulations.
                                    </p>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Tax strategy development</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Tax compliance management</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Tax-efficient business structuring</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <HashLink
                                            href="/contact"
                                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                        >
                                            Learn more <ChevronRight className="ml-1 h-4 w-4" />
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service div 5 */}
                        <div className="overflow-hidden border-none shadow-md bg-gradient-to-br from-white to-primary/5">
                            <div className="p-0">
                                <div className="p-6 border-b">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-primary/10 rounded-full p-3">
                                            <FileText className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Audit & Assurance</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Comprehensive audit and assurance services to ensure the accuracy of your financial information.
                                    </p>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Internal audit services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Financial statement audits</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Compliance audits</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <HashLink
                                            href="/contact"
                                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                        >
                                            Learn more <ChevronRight className="ml-1 h-4 w-4" />
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service div 6 */}
                        <div className="overflow-hidden border-none shadow-md bg-gradient-to-br from-white to-primary/5">
                            <div className="p-0">
                                <div className="p-6 border-b">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-primary/10 rounded-full p-3">
                                            <Shield className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Risk Management</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Proactive financial risk management to identify, assess, and mitigate risks to your business.
                                    </p>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Risk assessment and analysis</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Risk mitigation strategies</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">Financial controls implementation</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <HashLink
                                            href="/contact"
                                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                        >
                                            Learn more <ChevronRight className="ml-1 h-4 w-4" />
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - Icon Timeline */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-16">
                        <h3 className="mb-4">Our Approach</h3>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                            Our systematic approach ensures we deliver exceptional financial services tailored to your business needs.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line for desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

                        {/* Process Steps */}
                        <div className="space-y-12 md:space-y-0">
                            {/* Step 1 */}
                            <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                                <div className="md:text-right md:pr-12">
                                    <div className="hidden md:block absolute right-0 top-0 w-12 h-0.5 bg-primary/20"></div>
                                    <div className="hidden md:flex absolute right-0 top-0 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white items-center justify-center">
                                        1
                                    </div>
                                    <div className="md:hidden flex items-center mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                                            1
                                        </div>
                                        <h3 className="text-xl font-bold">Assessment</h3>
                                    </div>
                                    <h3 className="hidden md:block text-xl font-bold mb-4">Assessment</h3>
                                    <p className="text-muted-foreground">
                                        We begin by thoroughly assessing your current financial operations, challenges, and objectives to
                                        understand your unique needs.
                                    </p>
                                </div>
                                <div className="md:hidden h-8"></div>
                                <div className="md:pl-12"></div>
                            </div>

                            {/* Step 2 */}
                            <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                                <div className="md:pr-12"></div>
                                <div className="md:hidden h-8"></div>
                                <div className="md:pl-12">
                                    <div className="hidden md:block absolute left-0 top-0 w-12 h-0.5 bg-primary/20"></div>
                                    <div className="hidden md:flex absolute left-0 top-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white items-center justify-center">
                                        2
                                    </div>
                                    <div className="md:hidden flex items-center mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                                            2
                                        </div>
                                        <h3 className="text-xl font-bold">Strategy Development</h3>
                                    </div>
                                    <h3 className="hidden md:block text-xl font-bold mb-4">Strategy Development</h3>
                                    <p className="text-muted-foreground">
                                        We develop a tailored financial strategy that addresses your specific challenges and aligns with
                                        your business goals.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                                <div className="md:text-right md:pr-12">
                                    <div className="hidden md:block absolute right-0 top-0 w-12 h-0.5 bg-primary/20"></div>
                                    <div className="hidden md:flex absolute right-0 top-0 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white items-center justify-center">
                                        3
                                    </div>
                                    <div className="md:hidden flex items-center mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                                            3
                                        </div>
                                        <h3 className="text-xl font-bold">Implementation</h3>
                                    </div>
                                    <h3 className="hidden md:block text-xl font-bold mb-4">Implementation</h3>
                                    <p className="text-muted-foreground">
                                        Our expert team implements the strategy with precision, ensuring minimal disruption to your ongoing
                                        operations.
                                    </p>
                                </div>
                                <div className="md:hidden h-8"></div>
                                <div className="md:pl-12"></div>
                            </div>

                            {/* Step 4 */}
                            <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                                <div className="md:pr-12"></div>
                                <div className="md:hidden h-8"></div>
                                <div className="md:pl-12">
                                    <div className="hidden md:block absolute left-0 top-0 w-12 h-0.5 bg-primary/20"></div>
                                    <div className="hidden md:flex absolute left-0 top-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white items-center justify-center">
                                        4
                                    </div>
                                    <div className="md:hidden flex items-center mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                                            4
                                        </div>
                                        <h3 className="text-xl font-bold">Monitoring & Optimization</h3>
                                    </div>
                                    <h3 className="hidden md:block text-xl font-bold mb-4">Monitoring & Optimization</h3>
                                    <p className="text-muted-foreground">
                                        We continuously monitor and optimize our solutions to ensure they deliver maximum value and adapt to
                                        changing needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Icon Stats */}
            <section className="py-16 md:py-20 bg-primary/5">
                <div className="container">
                    <div className="text-center mb-16">
                        <h3 className="mb-4">Our Impact</h3>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Delivering Measurable Results</h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                            Our accounting and finance services have helped businesses achieve significant improvements in their
                            financial performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
                                <TrendingUp className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">25%</div>
                            <p className="text-muted-foreground">Average increase in profitability</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
                                <Receipt className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">30%</div>
                            <p className="text-muted-foreground">Reduction in financial reporting time</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
                                <Coins className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">20%</div>
                            <p className="text-muted-foreground">Average tax savings</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
                                <Calculator className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">95%</div>
                            <p className="text-muted-foreground">Client satisfaction rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-primary text-white">
                <div className="container text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Financial Operations?</h2>
                        <p className="text-xl opacity-90 mb-8">
                            Contact our team today to learn how our accounting and finance services can help your business thrive.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                                <HashLink href="/contact">Get Started</HashLink>
                            </button>
                            <button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                <HashLink href="/contact">Schedule a Consultation</HashLink>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
