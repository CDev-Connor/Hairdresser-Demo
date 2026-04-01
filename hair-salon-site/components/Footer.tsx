export default function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-stone-50">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
                <p>© 2026 Luxe Hair Studio. All rights reserved.</p>
                <div className="flex flex-wrap gap-4">
                    <a href="#">Instagram</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Imprint</a>
                </div>
            </div>
        </footer>
    );
}