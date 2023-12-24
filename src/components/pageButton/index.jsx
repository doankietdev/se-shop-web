const PageButton = ({ pg, setPage }) => {
    return <button className="text-xl text-white w-[32px] h-[32px] rounded-lg bg-slate-500 focus:bg-black" onClick={() => setPage(pg)}>{pg}</button>
}

export default PageButton