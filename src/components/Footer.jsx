export default function Footer() {
  return (
    <footer className="mt-20">
      <hr className="text-purple-200" />
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm pb-10 pt-8 text-purple-900">
          &copy; {new Date().getFullYear()} Vigovia Tech. Made with ❤️ by Sakshi
         
        </p>
      </div>
    </footer>
  );
}
