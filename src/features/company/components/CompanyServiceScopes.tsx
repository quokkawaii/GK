type CompanyServiceScopesProps = Readonly<{
  scopes: readonly Readonly<{ name: string; description: string }>[];
}>;
// 회사가 안내하는 시공 범위를 카드 목록으로 표시한다.
export function CompanyServiceScopes({ scopes }: CompanyServiceScopesProps) {
  return (
    <div className="border-border bg-border mt-8 grid gap-px border sm:grid-cols-2">
      {scopes.map((scope) => (
        <div key={scope.name} className="bg-white p-4">
          <h3 className="text-sm font-semibold">{scope.name}</h3>
          <p className="mt-1 text-xs text-[#666666]">{scope.description}</p>
        </div>
      ))}
    </div>
  );
}
