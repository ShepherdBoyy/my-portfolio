import CategoryPills from "./elements/CategoryPills";
import PlatformDropdown from "./elements/PlatformDropdown";
import SearchInput from "./elements/SearchInput";

export default function Index() {
  return (
    <div>
      <SearchInput value="hello" />
      <PlatformDropdown />
      <CategoryPills />
    </div>
  )
}
