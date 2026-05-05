import { motion } from 'framer-motion';
import { ArrowLeft, Wallet, PieChart, Bell, Shield, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const BudgetApp = () => {
  const screenshotSections = [
    { 
      src: '/assets/b1.jpeg', 
      title: 'Smart Financial Dashboard', 
      description: 'Experience a comprehensive overview of your financial status. Our intelligent dashboard aggregates your daily spending, current balance, and monthly progress into a single, beautiful interface. It uses advanced data visualization to highlight your financial health at a glance, allowing you to make informed decisions without digging through complex spreadsheets.' 
    },
    { 
      src: '/assets/b2.jpeg', 
      title: 'Seamless Expense Logging', 
      description: 'Logging transactions has never been faster. With our streamlined entry system, you can record expenses in seconds. Categorize your spending with custom tags, add notes for future reference, and attach digital receipts. The app learns your habits and suggests categories automatically, making financial management an effortless part of your daily routine.' 
    },
    { 
      src: '/assets/b3.jpeg', 
      title: 'Advanced Data Analytics', 
      description: 'Dive deep into your spending patterns with interactive charts and granular reports. Visualize your expenses by category, time period, or payment method. Our powerful analytics engine identifies trends and potential savings, helping you understand where every cent goes. Transform raw data into actionable insights to reach your savings goals faster.' 
    },
    { 
      src: '/assets/b4.jpeg', 
      title: 'Precision Budget Planning', 
      description: 'Set realistic monthly targets for every aspect of your life—from groceries to entertainment. Our precision budgeting tool monitors your progress in real-time, providing visual cues when you\'re approaching your limits. Stay disciplined with smart forecasting that predicts your end-of-month balance based on current spending trends.' 
    },
    { 
      src: '/assets/b5.jpeg', 
      title: 'Intelligent Transaction History', 
      description: 'Never lose track of a payment again. Our searchable transaction ledger provides a complete history of your financial activity. Use advanced filters to find specific transactions by date range, category, or amount. Export your data for tax purposes or personal accounting with just a single tap.' 
    },
    { 
      src: '/assets/b7.jpeg', 
      title: 'Bank-Grade Security', 
      description: 'Your financial privacy is our top priority. The app employs bank-grade encryption and secure cloud protocols to ensure your data remains confidential. With biometric authentication and private local storage options, you have full control over who sees your financial information. Rest easy knowing your data is protected by the latest in mobile security technology.' 
    },
  ];

  const features = [
    {
      icon: <Wallet className="text-pink-500" />,
      title: "Real-time Tracking",
      description: "Log expenses on the go and see your updated balance instantly across all your devices."
    },
    {
      icon: <PieChart className="text-pink-500" />,
      title: "Category Insights",
      description: "Understand your spending habits with smart category-based breakdowns and visual trends."
    },
    {
      icon: <Bell className="text-pink-500" />,
      title: "Smart Alerts",
      description: "Get notified about upcoming bills, budget limits, and unusual spending patterns immediately."
    },
    {
      icon: <Globe className="text-pink-500" />,
      title: "Cloud Sync",
      description: "Your data is automatically synced across all your devices with end-to-end encryption."
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-pink-500 transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6"
              >
                Mobile Application
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
              >
                Personal <span className="text-gradient">Budget Tracker</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-white/60 mb-8 leading-relaxed"
              >
                Take control of your finances with a powerful, easy-to-use mobile application. 
                Built with React Native and Expo, this app provides real-time tracking, 
                smart notifications, and deep insights into your spending habits.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                {["React Native", "Expo", "Node.js", "MongoDB", "Express"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-slate-900 dark:text-white font-bold bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                    {t}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative group max-w-[380px]">
                <div className="absolute -inset-4 bg-pink-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-[3rem] overflow-hidden border-[8px] border-slate-900 dark:border-slate-800 shadow-2xl">
                  <img 
                    src="/assets/budgetapp.jpeg" 
                    alt="Budget App Hero" 
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Walkthrough - Side by Side */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              App <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              A deep dive into the features that make our Budget Tracker the ultimate tool for financial freedom.
            </p>
          </div>

          <div className="flex flex-col gap-40">
            {screenshotSections.map((section, i) => (
              <div 
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 flex justify-center"
                >
                  <div className="relative group max-w-[340px]">
                    <div className="absolute -inset-4 bg-pink-500/10 blur-xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-slate-200 dark:border-white/10 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                      <img 
                        src={section.src} 
                        alt={section.title} 
                        className="w-full h-auto"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 text-center lg:text-left"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <Smartphone className="text-pink-500" size={24} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">{section.title}</h3>
                  <p className="text-xl text-slate-600 dark:text-white/60 leading-relaxed font-medium">
                    {section.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quick Features Grid */}
      <section className="py-32 bg-slate-50 dark:bg-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-16">
            Core <span className="text-gradient">Capabilities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-slate-600 dark:text-white/60 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 dark:bg-pink-600 py-20 px-8 text-center text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white blur-[100px] rounded-full" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Start Tracking Today</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Need a custom mobile solution for your business or personal use? 
              I specialize in building high-performance cross-platform applications.
            </p>
            <a 
              href="https://wa.me/94717033907"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform relative z-10"
            >
              Contact me on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudgetApp;
