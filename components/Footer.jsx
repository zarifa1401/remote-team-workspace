export default function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; {currentYear} Remote Team Workspace. All rights reserved.</p>
            </div>
        </footer>

    )
}