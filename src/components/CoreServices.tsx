import React from 'react';
import { Calendar, Info, HardDrive, Headphones, FileText } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Meeting Room Bookings",
    description: "Effortlessly reserve conference rooms and workspaces",
    icon: Calendar,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Company Information",
    description: "Get instant access to corporate policies and procedures",
    icon: Info,
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 3,
    title: "Office Resources",
    description: "Find and request office supplies and equipment",
    icon: HardDrive,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "IT Support Triage",
    description: "Quick technical assistance and troubleshooting",
    icon: Headphones,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 5,
    title: "HR Policy Questions",
    description: "Human resources guidance and policy clarification",
    icon: FileText,
    color: "from-pink-500 to-pink-600"
  }
];

const CoreServices: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Core Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Alex is equipped to assist you with these essential workplace services through voice and chat interactions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <IconComponent className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="relative overflow-hidden">
                <div className={`h-1 w-full bg-gray-200 rounded-full`}>
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-700 ease-out`}></div>
                </div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${service.color} rounded-full animate-ping`} style={{ animationDelay: '0.2s' }}></div>
                <div className={`absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r ${service.color} rounded-full animate-ping`} style={{ animationDelay: '0.5s' }}></div>
                <div className={`absolute top-1/2 left-4 w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full animate-ping`} style={{ animationDelay: '0.8s' }}></div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          Talk to Alex below to access any of these services
        </p>
      </div>
    </div>
  );
};

export default CoreServices;