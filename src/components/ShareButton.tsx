import React from 'react';
import { FaShareAlt, FaTwitter, FaFacebook, FaWhatsapp, FaLink } from 'react-icons/fa';

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({
  title = '¡Evalúa tus conocimientos para el concurso!',
  text = 'He estado usando esta aplicación para prepararme para el concurso. ¡Muy útil!',
  url = window.location.href,
  className = ''
}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (err) {
        console.error('Error al compartir:', err);
      }
    } else {
      // Alternativa para navegadores que no soportan la Web Share API
      const shareMenu = document.getElementById('share-menu');
      if (shareMenu) {
        shareMenu.classList.toggle('hidden');
      }
    }
  };

  const shareOnSocial = (platform: string) => {
    const shareUrl = new URL(url);
    let shareLink = '';

    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('¡Enlace copiado al portapapeles!');
        return;
    }

    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={handleShare}
        className="flex items-center justify-center p-2 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 transition-colors"
        aria-label="Compartir"
        title="Compartir en redes sociales"
      >
        <FaShareAlt className="w-5 h-5" />
      </button>

      {/* Menú de compartir para navegadores de escritorio */}
      <div 
        id="share-menu" 
        className="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 z-50 border border-slate-200 dark:border-slate-700"
      >
        <button
          onClick={() => shareOnSocial('twitter')}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <FaTwitter className="w-4 h-4 mr-2 text-blue-400" />
          Twitter
        </button>
        <button
          onClick={() => shareOnSocial('facebook')}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <FaFacebook className="w-4 h-4 mr-2 text-blue-600" />
          Facebook
        </button>
        <button
          onClick={() => shareOnSocial('whatsapp')}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <FaWhatsapp className="w-4 h-4 mr-2 text-green-500" />
          WhatsApp
        </button>
        <button
          onClick={() => shareOnSocial('copy')}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <FaLink className="w-4 h-4 mr-2 text-gray-500" />
          Copiar enlace
        </button>
      </div>
    </div>
  );
};

export default ShareButton;
