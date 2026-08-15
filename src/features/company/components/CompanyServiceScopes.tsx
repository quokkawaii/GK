// 회사가 안내하는 시공 범위 목록이다.
type CompanyServiceScopesProps = Readonly<{
  scopes: readonly Readonly<{ name: string; description: string }>[];
}>;
// 회사가 안내하는 시공 범위를 카드 목록으로 표시한다.
export function CompanyServiceScopes({ scopes }: CompanyServiceScopesProps) {
  return (
    /* 시공 범위를 카드 목록으로 표시하는 회사 소개 영역이다. */
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {scopes.map((scope) => (
        /* 시공 범위 한 가지의 이름과 설명을 표시하는 카드다. */
        <div key={scope.name} className="toss-card p-5">
          <h3 className="text-sm font-semibold">{scope.name}</h3>
          <p className="mt-1 text-xs text-[#666666]">{scope.description}</p>
        </div>
      ))}
    </div>
  );
}
