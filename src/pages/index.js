import Stats from '@/components/Stats';
import Banner from '@/components/Banner';
import Service from '@/components/Service';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
        >
            {/* Gradient Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EF4765]/10 rounded-full filter blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4764e9]/10 rounded-full filter blur-[150px]"></div>
            </div>

            {/* Main Content */}
            <main className="relative z-10">
                <Banner />
                <Stats />
                <Service />
                <Resume />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </motion.div>
    );
}
