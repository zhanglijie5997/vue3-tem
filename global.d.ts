declare namespace StoreAction {
    interface StoreActionType {
        commit: (name: string, data?: any) => void
    }
} 