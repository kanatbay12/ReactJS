function Content() {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-200 fixed top-0 left-0 pt-16">
        {/* Сайдбар */}
        <div className="p-4">Sidebar</div>
      </aside>
      <main className="ml-64 pt-16 flex-1 p-4">
        {/* Основной контент */}
        Content
      </main>
    </div>
  );
}

export default Content;
