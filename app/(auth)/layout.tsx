const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-center min-h-screen w-full bg-primary-200 bg-dotted-pattern bg-cover bg-center">
            {children}
        </div>
    )
}

export default Layout