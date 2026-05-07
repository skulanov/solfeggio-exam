import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Play, Pause, Music, BookOpen, ArrowLeft } from 'lucide-react';
import { TICKET_DATA, Ticket, TicketSection } from './TicketData';
import { THEORY_CONTENT } from './TheoryData';

/**
 * Audio player component with a classic design
 */
function AudioButton({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(src));

  const toggle = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.warn('Audio play failed (likely file not found):', e));
    }
    setIsPlaying(!isPlaying);
  };

  audio.onended = () => setIsPlaying(false);

  return (
    <button
      id={`audio-btn-${src}`}
      onClick={toggle}
      className="flex items-center justify-center w-10 h-10 bg-brand-red/10 border border-brand-red/20 rounded-full hover:bg-brand-red/20 transition-all active:scale-95 group shadow-sm"
    >
      {isPlaying ? (
        <Pause className="w-4 h-4 text-brand-red fill-brand-red" />
      ) : (
        <Play className="w-4 h-4 text-brand-red fill-brand-red ml-0.5" />
      )}
    </button>
  );
}

/**
 * Component for a single ticket section
 */
function TicketSectionItem({ section }: { section: TicketSection }) {
  const { title, image, audio, subItems } = section;
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-xl font-serif font-semibold mb-4 text-brand-black">
        {section.title}
      </h3>
      
      {section.image && (
        <div className="mb-4 bg-white p-4 rounded-lg shadow-sm border border-brand-black/5">
          <img 
            src={`images/${section.image}`} 
            alt={section.title} 
            className="w-full max-w-2xl mx-auto h-auto rounded"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {section.audio && !section.subItems && (
        <div className="mt-2">
          <AudioButton src={`audio/${section.audio}`} />
        </div>
      )}

      {section.subItems && (
        <div className="space-y-3 mt-4">
          {section.subItems.map((item, idx) => (
            <div key={idx} className="flex flex-wrap items-center gap-4 pl-4 border-l-2 border-brand-red/20">
              {item.text && <span className="musical-text text-lg">{item.text}</span>}
              {item.label && <span className="font-medium text-brand-black/70">{item.label}</span>}
              {item.audio && <AudioButton src={`audio/${item.audio}`} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [currentTicketId, setCurrentTicketId] = useState<number | null>(null);
  const [showTheory, setShowTheory] = useState(false);

  const currentTicket = TICKET_DATA.find(t => t.id === currentTicketId);

  const selectTicket = (id: number) => {
    setCurrentTicketId(id);
    setShowTheory(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTheory = () => {
    setShowTheory(true);
    setCurrentTicketId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setCurrentTicketId(null);
    setShowTheory(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-8 md:py-12">
      <AnimatePresence mode="wait">
        {(!currentTicketId && !showTheory) ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center"
          >
            {/* Logo Section */}
            <div className="mb-12 w-full flex justify-center">
              <img 
                id="logo"
                src="images/logo5.png" 
                alt="Сольфеджио Лого" 
                className="w-full max-w-[200px] h-auto saturate-110"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Ticket Navigation */}
            <div className="w-full max-w-xs flex flex-col gap-4">
              {TICKET_DATA.map((ticket) => (
                <button
                  id={`btn-ticket-${ticket.id}`}
                  key={ticket.id}
                  onClick={() => selectTicket(ticket.id)}
                  className="group relative px-6 py-4 bg-white border-2 border-brand-black/10 rounded-xl text-lg font-medium text-brand-black hover:border-brand-red hover:text-brand-red transition-all shadow-sm hover:shadow-md flex items-center justify-center"
                >
                  <Music className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-brand-red absolute left-4" />
                  <span>{ticket.title}</span>
                  <Music className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-brand-red absolute right-4" />
                </button>
              ))}

              <button
                id="btn-theory"
                onClick={openTheory}
                className="group relative px-6 py-4 bg-brand-red/5 border-2 border-brand-red/20 rounded-xl text-lg font-bold text-brand-red hover:bg-brand-red hover:text-white transition-all shadow-sm hover:shadow-md flex items-center justify-center mt-4"
              >
                <BookOpen className="w-5 h-5 mr-3" />
                <span>Ответы на билеты</span>
              </button>
            </div>
            
            <footer className="mt-16 text-brand-black/30 text-sm font-serif italic text-center">
              by Dima Skulanov 2026
            </footer>
          </motion.div>
        ) : showTheory ? (
          <motion.div
            key="theory"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full"
          >
            <button 
              id="back-from-theory"
              onClick={goBack}
              className="mb-8 flex items-center gap-2 text-brand-red hover:text-brand-red/80 transition-colors font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Назад в меню</span>
            </button>

            <h1 className="text-4xl font-serif font-bold mb-10 text-brand-black border-b-4 border-brand-red pb-4 inline-block">
              Ответы на билеты
            </h1>

            <div className="space-y-8">
              {THEORY_CONTENT.map((section, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-black/5">
                  <h2 className="text-2xl font-serif font-bold mb-6 text-brand-red flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-brand-red text-white text-sm rounded-full font-sans">
                      {idx + 1}
                    </span>
                    {section.title}
                  </h2>
                  
                  {section.content.length > 0 && (
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="text-brand-black/80 leading-relaxed flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-red/30 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="mt-8 overflow-x-auto rounded-xl border border-brand-black/10">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-brand-red/5">
                            {section.table.headers.map((h, i) => (
                              <th key={i} className="p-4 text-left font-serif text-brand-red border-b border-brand-black/10">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-brand-black/[0.01] transition-colors">
                              {row.map((cell, j) => (
                                <td key={j} className="p-4 text-brand-black/70 border-b border-brand-black/5 last:border-b-0">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button 
                onClick={goBack}
                className="px-10 py-4 bg-brand-red text-white rounded-full hover:bg-brand-red/90 transition-all shadow-lg hover:shadow-xl active:scale-95 font-bold"
              >
                Вернуться к списку билетов
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="ticket"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="ticket-content"
          >
            {/* Back Button */}
            <button
              id="btn-back"
              onClick={goBack}
              className="mb-8 flex items-center gap-2 text-brand-black/60 hover:text-brand-red transition-colors font-medium group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Вернуться назад
            </button>

            {/* Ticket Header */}
            <header className="mb-12 border-b-2 border-brand-red/10 pb-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-red flex items-center gap-4">
                <Music className="w-8 h-8" />
                {currentTicket?.title}
              </h2>
            </header>

            {/* Ticket Content */}
            <div className="space-y-4">
              {currentTicket?.sections.length ? (
                currentTicket.sections.map((section, idx) => (
                  <div key={idx}>
                    <TicketSectionItem section={section} />
                  </div>
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="text-brand-black/40 italic font-serif text-xl">
                    Содержание этого билета будет добавлено в ближайшее время...
                  </p>
                </div>
              )}
            </div>
            
            <div className="mt-16 pt-8 border-t border-brand-red/10 flex justify-center">
               <button
                onClick={goBack}
                className="px-8 py-3 bg-brand-red text-white rounded-full hover:bg-brand-red/90 transition-all font-medium shadow-lg hover:shadow-xl active:scale-95"
              >
                Вернуться к списку билетов
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
