'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MapLocationProps {
  lang: 'ja' | 'en';
}

const MapLocation: React.FC<MapLocationProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'アクセス',
      mapTitle: '地図',
      access: 'アクセス方法',
      station: '最寄駅',
      stationName: '[駅名・路線名]',
      fromStation: '駅からのアクセス',
      directions: '駅から徒歩[X]分\n[詳細な道順]',
      parking: '駐車場',
      parkingInfo: '[駐車場の有無・詳細]',
      mapPlaceholder: '地図を読み込んでいます...'
    },
    en: {
      title: 'Access',
      mapTitle: 'Map',
      access: 'How to Get Here',
      station: 'Nearest Station',
      stationName: '[Station Name & Line]',
      fromStation: 'From Station',
      directions: '[X] minutes walk from station\n[Detailed directions]',
      parking: 'Parking',
      parkingInfo: '[Parking availability and details]',
      mapPlaceholder: 'Loading map...'
    }
  };

  const text = content[lang];

  // Replace with actual coordinates when address is available
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.3276524956576!2d139.6380256!3d35.4437069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI2JzM3LjMiTiAxMznCsDM4JzE2LjkiRQ!5e0!3m2!1sen!2sjp!4v1234567890";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {text.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <svg className="w-6 h-6 text-solunai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {text.mapTitle}
                  </h3>
                </div>

                <div className="relative h-96 bg-gray-100">
                  {/* Replace this with actual Google Maps embed when address is available */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-500">{text.mapPlaceholder}</p>
                      <p className="text-sm text-gray-400 mt-2">
                        {lang === 'ja' ? 'Google Maps統合予定' : 'Google Maps integration pending'}
                      </p>
                    </div>
                  </div>

                  {/* Uncomment when actual address is available
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={text.mapTitle}
                  />
                  */}
                </div>
              </div>
            </motion.div>

            {/* Access Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-solunai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {text.access}
                </h3>

                <div className="space-y-6">
                  {/* Station */}
                  <div className="border-l-4 border-solunai-blue pl-6">
                    <div className="flex items-start gap-3 mb-2">
                      <svg className="w-5 h-5 text-solunai-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{text.station}</h4>
                        <p className="text-gray-700">{text.stationName}</p>
                      </div>
                    </div>
                  </div>

                  {/* Directions */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-start gap-3 mb-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{text.fromStation}</h4>
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">{text.directions}</p>
                      </div>
                    </div>
                  </div>

                  {/* Parking */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-start gap-3 mb-2">
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{text.parking}</h4>
                        <p className="text-gray-700">{text.parkingInfo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-solunai-blue to-blue-700 rounded-xl shadow-lg p-8 text-white">
                <h4 className="font-bold text-lg mb-4">
                  {lang === 'ja' ? 'ナビゲーション' : 'Navigation'}
                </h4>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>{lang === 'ja' ? 'Google Mapsで開く' : 'Open in Google Maps'}</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{lang === 'ja' ? '訪問予約をする' : 'Schedule a Visit'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapLocation;
