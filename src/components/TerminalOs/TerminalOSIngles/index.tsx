

export const TerminalOsIngles = () => {

    return (
        <div className="w-full rounded-lg border border-zinc-300 dark:border-zinc-800 shadow-2xl overflow-hidden my-12">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-300 dark:border-zinc-800">
                <span className="w-3 h-3 rounded-full bg-red-700" />
                <span className="w-3 h-3 rounded-full bg-blue-600" />
                <span className="w-3 h-3 rounded-full bg-emerald-700" />
                <span className="ml-3 font-mono text-xs">
                    Let's look at the pros and cons.
                </span>
            </div>
            <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 px-8 py-10 flex flex-col items-center gap-4 w-full">
                <h1 className="text-2xl font-bold">English version is comming soon</h1>
                <h3 className="text-lg opacity-80">Thank you for visit my web site</h3>
            </div>
        </div>
    )
}